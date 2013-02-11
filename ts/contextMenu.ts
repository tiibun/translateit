/// <reference path="chrome"/>
import runtime = chrome.runtime;
import contextMenus = chrome.contextMenus;
import extension = chrome.extension;
import tabs = chrome.tabs;

var id = 'TranslateIt';

runtime.onInstalled.addListener((): void => {
	contextMenus.create({
		'id': id,
		'title': 'Translate it',
		'contexts': ['selection'],
	});
});

extension.onMessage.addListener((message) => {
	contextMenus.update(id, {
		'title': 'Translate \"' + message + '\"'
	});
});

contextMenus.onClicked.addListener(
	(info: contextMenus.OnClickData, tab?: tabs.Tab): void => {
		tabs.create({
			'url': 'http://translate.google.co.jp/#en/ja/' + info.selectionText
		});
	}
);