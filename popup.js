document.getElementById('btnOn').addEventListener('click', function() {
    chrome.storage.local.set({ 'titleChanger': true }, function() {
        // Update status in UI
        document.getElementById('status').textContent = 'On';
    });

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['contentScript.js']
        });
    });

    chrome.webNavigation.onCompleted.addListener(handleNavigationComplete);
});

// Retrieve initial status on popup load
chrome.storage.local.get(['titleChanger'], function(result) {
    const statusElement = document.getElementById('status');
    if (result['titleChanger']) {
        statusElement.textContent = 'On';
    } else {
        statusElement.textContent = 'Off';
    }
});

function handleNavigationComplete(details) {
    // Check if the titleChanger flag is enabled
    chrome.storage.local.get(['titleChanger'], function(result) {
        if (result['titleChanger']) {
            chrome.scripting.executeScript({
                target: { tabId: details.tabId },
                files: ['contentScript.js']
            });
        }
    });
}

chrome.webNavigation.onCompleted.addListener(handleNavigationComplete, {
    url: [{ schemes: ['http', 'https'] }] // Filter URLs to handle
});