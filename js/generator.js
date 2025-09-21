import loadoutData from "./loadoutData.js";
import { checkCompatibility } from "./compatibility.js";
import {getRandomItemUnique, isAllowedByWarbond, hasConflict, applySynergy, filterCandidatesByTags} from "./utils.js";
import { RECOMMENDED } from "./config.js";

function generateLoadout(mode = "full_random", archetype = null, allowedSources = null) {
    const maxGenerationAttempts = 100;
    let generationAttempts = 0;
    let build;
    let isCompatible = false;
    const structure = loadoutData.config.loadoutStructure;
    const categoryOrder = ["primary_weapon", "secondary_weapon", "grenades", "stratagems", "armor", "booster"];

    while (generationAttempts < maxGenerationAttempts && !isCompatible) {
        build = {};

        for (const category of categoryOrder) {
            const options = structure[category];
            if (!options) continue;

            let itemArray;
            switch (category) {
                case "primary_weapon":
                    itemArray = loadoutData.items.primary_weapons;
                    break;
                case "secondary_weapon":
                    itemArray = loadoutData.items.secondary_weapons;
                    break;
                case "grenades":
                    itemArray = loadoutData.items.grenades;
                    break;
                case "stratagems":
                    itemArray = loadoutData.items.stratagems;
                    break;
                case "armor":
                    itemArray = loadoutData.items.armor;
                    break;
                case "booster":
                    itemArray = loadoutData.items.boosters;
                    break;
                default:
                    continue;
            }

            let candidates = itemArray.slice();
            if (allowedSources && allowedSources.length > 0) {
                candidates = candidates.filter(item => isAllowedByWarbond(item, allowedSources));
            }

            if (mode === "smart_pick" && archetype) {
                if (RECOMMENDED[archetype] && RECOMMENDED[archetype][category]) {
                    const recCandidates = candidates.filter(item => RECOMMENDED[archetype][category].includes(item.id));
                    if (recCandidates.length > 0) {
                        candidates = recCandidates;
                    }
                } else {
                    const archetypeCandidates = candidates.filter(item => item.tags && item.tags.includes(archetype));
                    const neededCount = options.max || 1;
                    if (archetypeCandidates.length >= neededCount) {
                        candidates = archetypeCandidates;
                    }
                }
            }
            if (category === "armor") {
                if (mode === "smart_pick" && archetype) {
                    const fallbackArmor = (candidates) => {
                        switch (archetype) {
                            case "automatons":
                                return candidates.filter(item =>
                                    item.tags && (item.tags.includes("reinforced") ||
                                        item.tags.includes("extra-padding") ||
                                        item.tags.includes("democracy-protects"))
                                );
                            case "terminids":
                                return candidates.filter(item =>
                                    item.tags && (item.tags.includes("engineering") ||
                                        item.tags.includes("servo-assisted") ||
                                        item.tags.includes("integrated-explosives"))
                                );
                            case "illuminates":
                                return candidates.filter(item =>
                                    item.tags && (item.tags.includes("siege-ready") ||
                                        item.tags.includes("med-kit") ||
                                        item.tags.includes("ballistic-padding") ||
                                        item.tags.includes("electrical-conduit"))
                                );
                            default:
                                return candidates;
                        }
                    };

                    const stratagems = (build["stratagems"] && Array.isArray(build["stratagems"])) ? build["stratagems"] : [];
                    const requiredTags = [];
                    if (stratagems.some(s => s && s.tags && s.tags.includes("flame"))) {
                        requiredTags.push("flame");
                    }
                    if (stratagems.some(s => s && s.tags && s.tags.includes("gas"))) {
                        requiredTags.push("gas");
                    }
                    if (stratagems.some(s => s && s.tags && s.tags.includes("peak-physique"))) {
                        requiredTags.push("peak-physique");
                    }

                    if (requiredTags.length > 0) {
                        candidates = filterCandidatesByTags(candidates, requiredTags, () => []);
                    } else {
                        candidates = fallbackArmor(candidates);
                    }
                }
                candidates = applySynergy(category, candidates, build);
            }

            if (options.max) {
                build[category] = [];
                const needed = options.max;
                let localAttempts = 0;
                while (build[category].length < needed && candidates.length > 0 && localAttempts < 1000) {
                    const candidate = getRandomItemUnique(candidates);

                    if (category === "stratagems") {
                        if (candidate.subtype === "supply_weapon") {
                            const hasSupply = build[category].some(item => item.subtype === "supply_weapon");
                            if (hasSupply) {
                                localAttempts++;
                                continue;
                            }
                            if (Math.random() >= 0.9) {
                                localAttempts++;
                                continue;
                            }
                        }
                        if (candidate.subtype === "sentry") {
                            const hasSentry = build[category].some(item => item.subtype === "sentry");
                            if (hasSentry && Math.random() < 0.7) {
                                localAttempts++;
                                continue;
                            }
                        }
                    }

                    if (hasConflict(candidate, build[category])) {
                        localAttempts++;
                        continue;
                    }
                    build[category].push(candidate);
                    localAttempts = 0;
                }
            } else {
                build[category] = candidates.length > 0 ? getRandomItemUnique(candidates) : null;
            }
        }

        if (mode === "smart_pick") {
            isCompatible = checkCompatibility(build);
        } else {
            isCompatible = true;
        }
        generationAttempts++;
    }

    if (!isCompatible) {
        console.error("Failed to generate a compatible build after " + maxGenerationAttempts + " attempts");
    }

    return build;
}

export { generateLoadout };
