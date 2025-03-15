document.getElementById("start").addEventListener("click", () => {
    // Query the currently active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id }, // Use the active tab's ID
          files: ["content.js"]           // Inject content.js into the active tab
        });
      } else {
        console.error("No active tab found.");
      }
    });
  });
  