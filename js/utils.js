import { BONUS_SOURCES, KNOWN_WARBONDS } from "./config.js";

export function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomItemUnique(arr) {
    const index = Math.floor(Math.random() * arr.length);
    const item = arr[index];
    arr.splice(index, 1);
    return item;
}

export function isAllowedByWarbond(item, allowedSources) {
    if (!Object.prototype.hasOwnProperty.call(item, "source")) {
        return true;
    }

    const src = item.source ?? "";
    if (!src.trim()) {
        return allowedSources.includes("Other");
    }

    if (BONUS_SOURCES.includes(src)) {
        return allowedSources.includes("Bonus");
    }

    if (KNOWN_WARBONDS.includes(src)) {
        return allowedSources.includes(src);
    }

    return allowedSources.includes("Other");
}

export function hasConflict(item, chosenItems) {
    if (!Array.isArray(chosenItems)) return false;
    if (item.tags && item.tags.includes("backpack")) {
        for (const chosen of chosenItems) {
            if (chosen && chosen.tags && chosen.tags.includes("backpack")) {
                return true;
            }
        }
    }
    return false;
}

export function applySynergy(category, candidates, build) {
    if (category === "armor") {
        let stratagems = build["stratagems"];
        if (stratagems) {
            if (!Array.isArray(stratagems)) stratagems = [stratagems];

            const hasFlameStrat = stratagems.some(s => s && s.tags && s.tags.includes("flame"));
            if (hasFlameStrat) {
                const flameArmor = candidates.filter(item => item.tags && item.tags.includes("flame"));
                if (flameArmor.length > 0) {
                    return flameArmor;
                }
            }
            const hasGasStrat = stratagems.some(s => s && s.tags && s.tags.includes("gas"));
            if (hasGasStrat) {
                const gasArmor = candidates.filter(item => item.tags && item.tags.includes("gas"));
                if (gasArmor.length > 0) {
                    return gasArmor;
                }
            }
        }
    }
    return candidates;
}

export function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

export function filterCandidatesByTags(candidates, requiredTags, fallbackFn) {
    let filtered = candidates.filter(item =>
        item.tags && requiredTags.some(tag => item.tags.includes(tag))
    );
    if (filtered.length === 0) {
        filtered = fallbackFn(candidates);
    }
    return shuffleArray(filtered);
}
