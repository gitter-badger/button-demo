// Copyright (c) 2014 Blooie Limited. All rights reserved.

chrome.runtime.onMessage.addListener(function(msg) {
    loadBlooie();
});

function loadBlooie() {
    var head = document.getElementsByTagName("head")[0];
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = "https://app.bloo.ie/embed.js";
    head.appendChild(newScript);
}

// loadBlooie();
