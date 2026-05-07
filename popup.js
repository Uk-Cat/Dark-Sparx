document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    console.log("Popup loaded");

    toggle.addEventListener('change', () => {
        const enabled = toggle.checked;
        console.log("Toggle changed:", enabled);

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (!tabs[0]) return;
            const tabId = tabs[0].id;

            function sendMessage() {
                chrome.tabs.sendMessage(tabId, { action: 'toggleDarkMode', enabled: enabled }, (response) => {
                    if (chrome.runtime.lastError) {
                        console.log("Message failed, attempting to inject content script...");
                        // Fallback: Inject the content script manually
                        chrome.scripting.executeScript({
                            target: { tabId: tabId },
                            files: ['content.js']
                        }, () => {
                            if (chrome.runtime.lastError) {
                                console.error("Injection failed:", chrome.runtime.lastError.message);
                            } else {
                                console.log("Content script injected manually. Retrying message...");
                                // Try sending the message again after a short delay
                                setTimeout(() => {
                                    chrome.tabs.sendMessage(tabId, { action: 'toggleDarkMode', enabled: enabled });
                                }, 100);
                            }
                        });
                    } else {
                        console.log("Message received by content script:", response);
                    }
                });
            }

            sendMessage();
        });
    });
});
