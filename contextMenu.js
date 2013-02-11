var runtime = this.chrome.runtime;
var contextMenus = this.chrome.contextMenus;
var extension = this.chrome.extension;
var tabs = this.chrome.tabs;
var id = 'TranslateIt';
runtime.onInstalled.addListener(function () {
    contextMenus.create({
        'id': id,
        'title': 'Translate it',
        'contexts': [
            'selection'
        ]
    });
});
extension.onMessage.addListener(function (message) {
    contextMenus.update(id, {
        'title': 'Translate \"' + message + '\"'
    });
});
contextMenus.onClicked.addListener(function (info, tab) {
    tabs.create({
        'url': 'http://translate.google.co.jp/#en/ja/' + info.selectionText
    });
});
