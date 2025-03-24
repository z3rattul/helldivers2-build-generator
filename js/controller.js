import { generateLoadout } from "./generator.js";
import { renderBuild } from "./view.js";

let allowedWarbonds = [
    "Helldivers Mobilize",
    "Viper Commandos",
    "Democratic Detonation",
    "Steeled Veterans",
    "Polar Patriots",
    "Truth Enforcers",
    "Chemical Agents",
    "Pre-Order Bonus",
    "Cutting Edge",
    "Downloadable Content",
    "Servants of Freedom",
    "Premium Superstore",
    "Liberty Day",
    "Urban Legends",
    "Borderline Justice",
    "Superstore",
    "Bonus"
];

export function initController() {
    const generateBtn = document.getElementById("generate-btn");
    const modeSelect = document.getElementById("mode-select");
    const archetypeSelect = document.getElementById("archetype-select");
    const buildOutput = document.getElementById("build-output");

    const openWarbondPopupBtn = document.getElementById("open-warbond-popup");
    const warbondPopup = document.getElementById("warbond-popup");
    const closeWarbondPopupBtn = document.getElementById("close-warbond-popup");
    const applyWarbondFilterBtn = document.getElementById("apply-warbond-filter");

    generateBtn.addEventListener("click", () => {
        onGenerateClick(modeSelect, archetypeSelect, buildOutput);
    });

    openWarbondPopupBtn.addEventListener("click", () => {
        warbondPopup.style.display = "flex";
    });

    closeWarbondPopupBtn.addEventListener("click", () => {
        warbondPopup.style.display = "none";
    });

    applyWarbondFilterBtn.addEventListener("click", () => {
        const checkboxes = warbondPopup.querySelectorAll('input[name="warbond"]:checked');
        allowedWarbonds = Array.from(checkboxes).map(cb => cb.value);
        warbondPopup.style.display = "none";
        onGenerateClick(modeSelect, archetypeSelect, buildOutput);
    });

    document.addEventListener("DOMContentLoaded", () => {
        const checkboxes = document.querySelectorAll('input[name="warbond"]:checked');
        allowedWarbonds = Array.from(checkboxes).map(cb => cb.value);
    });

    onGenerateClick(modeSelect, archetypeSelect, buildOutput);
}

export function onGenerateClick(modeSelect, archetypeSelect, buildOutput) {
    const mode = modeSelect.value;
    const archetype = archetypeSelect.value || null;
    const build = generateLoadout(mode, archetype, allowedWarbonds);
    renderBuild(build, buildOutput);
}
