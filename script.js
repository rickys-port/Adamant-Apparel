function addMyStylesheet() {
    var myStylesheet = document.createElement("link");
    myStylesheet.rel = "stylesheet";
    myStylesheet.href = "style.css"; // Replace with the actual path to your CSS file
    document.head.appendChild(myStylesheet);
}

// Create a MutationObserver to watch for changes in the <head>
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(function(node) {
                // Check if the added node is a link element for a stylesheet
                if (node.tagName === "LINK" && node.rel === "stylesheet") {
                    // Once another stylesheet is detected, add your stylesheet
                    addMyStylesheet();
                    // Stop observing after adding your stylesheet
                    observer.disconnect();
                }
            });
        }
    });
});

// Configure the observer to watch for child nodes being added to the <head>
observer.observe(document.head, { childList: true });