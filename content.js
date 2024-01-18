
    document.querySelectorAll('*').forEach(function(node) {
        if (node.style.maxWidth) {
            node.style.maxWidth = 'none';
        }
    });

    // Or, if you prefer, you can inject a style element to override max-width styles
    var style = document.createElement('style');
    style.innerHTML = `
      * {
        max-width: none !important;
      }
    `;
    document.head.appendChild(style);
    