// Copyright (c) 2014 Blooie Limited. All rights reserved.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, "");
});
