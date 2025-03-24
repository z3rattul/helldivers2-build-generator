
# Helldivers 2 Build Generator

A client-side build generator for Helldivers 2 that creates randomized loadouts using both a full random mode and a smart pick mode based on archetypes, warbond filters, and synergy rules. The project is designed with modular architecture and can be easily integrated as a WordPress page template.

## Live Demo & Acknowledgements

- **Live Demo:**  
  Check out the live demo of the Helldivers 2 Build Generator at [https://game-rezone.com/en/helldivers-2-build-generator/](https://game-rezone.com/en/helldivers-2-build-generator/).

- **Acknowledgements:**
    - A big thank you to [GameRezone](https://game-rezone.com/) for their participation and support.
    - Thanks to [Helldivers Wiki](https://helldivers.wiki.gg/) for providing essential information and icons.
    - Gratitude to [nvigneux/Helldivers-2-Stratagems-icons-svg](https://github.com/nvigneux/Helldivers-2-Stratagems-icons-svg) for the icon assets.
  
## Features

- **Random Build Generation**: Generate fully random builds or use smart selection based on user preferences.
- **Smart Pick Mode**: Customize loadouts by selecting an archetype (Terminids, Automatons, Illuminates) and allowed warbonds.
- **Synergy & Compatibility Checks**: Automatically filters loadout items ensuring compatibility and synergy between chosen items.
- **Modular Architecture**: The project is split into clear modules: business logic (generator), UI rendering (view), and control (controller).
- **WordPress Integration**: Includes a page template for easy integration into a WordPress theme.

## Installation

### Clone the Repository:

```bash
git clone https://github.com/z3rattul/helldivers2-build-generator
```

### Run Locally:

Open the `index.html` file in your browser to test the build generator locally.

### WordPress Integration:

1. Place the project files (especially the template file) into your active theme directory.
2. Create a new page in WordPress and assign it the **"Helldivers 2 Build Generator"** template.

## File Structure

```arduino
helldivers2-build-generator/
├── css/
│   └── style.css
├── index.html
└── js/
    ├── compatibility.js    // Checks compatibility between build items.
    ├── config.js           // Contains configuration constants (e.g., RECOMMENDED loadouts).
    ├── controller.js       // Manages UI events and connects the UI with the generator.
    ├── generator.js        // Business logic for generating loadouts.
    ├── loadoutData.js      // Data for available items and loadout configurations.
    ├── ui.js               // Initializes the controller.
    ├── utils.js            // Utility functions (random selection, shuffling, filtering, etc.).
    └── view.js             // Handles DOM rendering of the generated build.
```

## Usage

1. **Select Mode:** Choose between "Full Random" and "Smart Pick" generation modes.
2. **Select Archetype:** Pick an archetype (Terminids, Automatons, Illuminates) to guide the smart pick logic.
3. **Filter Warbonds:** Use the warbond filter popup to select allowed warbond sources.
4. **Generate Build:** Click the "Regenerate Build" button to generate and display a new build.

## Security Considerations

- **Safe DOM Manipulation:** The UI rendering uses `createElement` and `textContent` rather than inserting raw HTML via `innerHTML`, minimizing the risk of XSS vulnerabilities.
- **Static Data:** All loadout data is defined statically in the code. If you decide to use external sources in the future, ensure proper sanitization and validation of inputs.
- **Additional Sanitization:** For further protection, consider integrating a sanitization library (like DOMPurify) if any dynamic or user-supplied data is introduced.

## Contributing

Contributions, improvements, bug reports, and feature requests are welcome. Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
