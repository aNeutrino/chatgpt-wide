document.getElementById('toggleStyle').addEventListener('click', function() {
    chrome.tabs.executeScript({
        code: `
            document.querySelectorAll('*').forEach(function(node) {
                if (node.style.maxWidth) {
                    node.style.maxWidth = 'none';
                }
            });

            var style = document.createElement('style');
            style.innerHTML = '* { max-width: none !important; }';
            document.head.appendChild(style);
        `
    });
});

