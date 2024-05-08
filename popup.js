document.getElementById('toggleStyle').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currentTab = tabs[0];
        chrome.scripting.executeScript({
            target: {tabId: currentTab.id},
            function: toggleMaxWidth
        });
    });
});

function toggleMaxWidth() {
    const key = 'styleToggled';
    const styleId = 'max-width-toggle-style';

    chrome.storage.local.get([key], function(result) {
        let styleExists = document.getElementById(styleId);
        if (result[key] && styleExists) {
            styleExists.remove();
            chrome.storage.local.set({[key]: false});
        } else {
            let style = document.createElement('style');
            style.id = styleId;
            style.innerHTML = '* { max-width: none !important; }';
            document.head.appendChild(style);
            chrome.storage.local.set({[key]: true});
        }
    });
}
