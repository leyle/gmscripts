// ==UserScript==
// @name         ohMyDouban
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  improve douban.com experience
// @author       leyle@leyle.com
// @include      https://*.douban.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // remove hot replies
    const hotName = document.getElementsByClassName('popular-hd');
    if(hotName.length > 0) {
        hotName[0].remove();
    }
    let replies = document.getElementsByClassName('topic-reply popular-bd');
    if(replies.length > 0) {
        replies[0].remove();
    } else {
        replies = document.getElementsByClassName('popular-bd');
        if(replies.length > 0) {
            replies[0].remove();
        }
    }

    // open topic in new tab
    // done in openInNewTab.js

    // remove floating landing bar
    const landingBar = document.getElementById("landing-bar");
    if(landingBar != null) {
        landingBar.remove();
    }
})();
