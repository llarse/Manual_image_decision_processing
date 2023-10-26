let currentCmapIndex = 0;
const totalCmaps = 664 / 4;  // Assuming 4 views per cmap
const responses = {
    yes: [],
    no: [],
    maybe: []
};

function loadImageSet(cmapIndex) {
    for (let viewNum = 0; viewNum < 4; viewNum++) {
        const imgElement = document.getElementById(`image${viewNum + 1}`);
        imgElement.src = `preprocessed_photos/cmap_${cmapIndex}_num_${viewNum}.png`;
    }

    // Update the cmap index display
    const cmapDisplayElement = document.getElementById('cmapIndexDisplay');
    cmapDisplayElement.textContent = cmapIndex;
}


function handleClick(response) {
    // Store the cmap number in the corresponding response list
    responses[response].push(currentCmapIndex);

    // Move to the next cmap set
    currentCmapIndex++;
    if (currentCmapIndex < totalCmaps) {
        loadImageSet(currentCmapIndex);
    } else {
        alert('All images processed!');
        downloadJSON();
    }
}

function downloadJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(responses));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "cmaps_processed.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

// Load the initial set of images
loadImageSet(currentCmapIndex);
