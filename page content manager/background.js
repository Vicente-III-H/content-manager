chrome.tabs.onUpdated.addListener((tabId, changes, tab) => {
    if (tab.url) {
        const tabHostname = new URL(tab.url);
        
        if (tabHostname.href.includes("www.youtube.com/watch")) {
            chrome.scripting.executeScript({
                target: {tabId: tabId},
                files: ["content-managers/youtube.js"]
            });
        } else if (tabHostname.href.includes("www.google.com/search")) {
            chrome.scripting.executeScript({
                target: {tabId: tabId},
                files: ["content-managers/google-search.js"]
            });
        }
    }
})