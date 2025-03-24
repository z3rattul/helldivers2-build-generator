function checkCompatibility(build) {
    let items = [];

    Object.keys(build).forEach((category) => {
        const categoryItems = build[category];
        if (Array.isArray(categoryItems)) {
            items.push(...categoryItems);
        } else {
            items.push(categoryItems);
        }
    });

    for (let i = 0; i < items.length; i++) {
        const currentItem = items[i];

        if (currentItem.compatibilityRules && currentItem.compatibilityRules.exclusiveWith) {
            for (let j = 0; j < items.length; j++) {
                if (i === j) continue;
                const otherItem = items[j];

                if (currentItem.compatibilityRules.exclusiveWith.includes(otherItem.id)) {
                    return false;
                }
            }
        }
    }

    return true;
}

export { checkCompatibility };
