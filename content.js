document.addEventListener('mouseup', function () {
    var selection = window.getSelection().toString().trim();
    chrome.extension.sendMessage(selection);
});
