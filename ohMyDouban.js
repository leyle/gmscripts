// ==UserScript==
// @name         Remove DouBan Hot Replies
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
    const replies = document.getElementsByClassName('topic-reply popular-bd');
    if(replies.length > 0) {
        replies[0].remove();
    }

    // open topic in new tab
    const as = document.getElementsByTagName("a");
    for(const a of as) {
        if(a.href && a.href.includes("/topic/")) {
            a.setAttribute("target", "_blank");
        }
    }

    // remove floating landing bar
    const landingBar = document.getElementById("landing-bar");
    if(landingBar != null) {
        landingBar.remove();
    }
})();
