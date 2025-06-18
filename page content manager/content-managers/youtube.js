function secondaryContentExists() {
    const panels = document.querySelector("#secondary #panels");
    const panelsExist = panels && panels.offsetHeight > 0;
    const playlist = document.querySelector("#secondary #playlist #container");
    const playlistExists = playlist && playlist.offsetHeight > 0;
    const chat = document.querySelector("#secondary #chat-container");
    const chatExists = chat && chat.offsetHeight > 0;
    const donations = document.querySelector("#secondary #donation-shelf");
    const donationsExist = donations && donations.offsetHeight > 0;

    return panelsExist || playlistExists || chatExists || donationsExist;
}

function maximizePrimaryContent() {
    const secondaryColumn = document.querySelector("#columns #secondary");
    if (secondaryColumn) {
        secondaryColumn.style.width = "0px";
        secondaryColumn.style.minWidth = "0px";
        secondaryColumn.style.paddingRight = "0px";
    };

    const primaryColumn = document.querySelector("#columns #primary");
    if (primaryColumn) { primaryColumn.style.maxWidth = "none" };
}

(() => {
    const relatedVideos = document.getElementById("related");
    if (relatedVideos) { relatedVideos.remove() };

    if (!secondaryContentExists()) { maximizePrimaryContent() };
})();