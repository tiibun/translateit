/// <reference path="chrome" />
document.addEventListener('mouseup', () => {
	var selection = window.getSelection().toString().trim();
	chrome.extension.sendMessage(selection);
});