export function renderBuild(build, buildOutput) {
    while (buildOutput.firstChild) {
        buildOutput.removeChild(buildOutput.firstChild);
    }

    Object.keys(build).forEach((category) => {
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("build-category");

        const title = document.createElement("h3");
        title.textContent = category.replace("_", " ").toUpperCase();
        categoryContainer.appendChild(title);
        categoryContainer.setAttribute("data-category", category);

        if (Array.isArray(build[category])) {
            build[category].forEach((item) => {
                const itemElem = createItemElement(item);
                categoryContainer.appendChild(itemElem);
            });
        } else if (build[category]) {
            const itemElem = createItemElement(build[category]);
            categoryContainer.appendChild(itemElem);
        }

        buildOutput.appendChild(categoryContainer);
    });
}

export function getAssetUrl(path) {
    if (path.startsWith("http") || path.startsWith("/")) {
        return path;
    }
    return path;
}

export function createItemElement(item) {
    const itemElem = document.createElement("div");
    itemElem.classList.add("build-item");

    const img = document.createElement("img");
    img.src = getAssetUrl(item.icon);
    img.alt = item.name;
    img.classList.add("item-icon");
    itemElem.appendChild(img);

    const span = document.createElement("span");
    span.classList.add("item-name");
    span.textContent = item.name;
    itemElem.appendChild(span);

    return itemElem;
}
