// ==UserScript==
// @name         Remove DouBan Hot Replies
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove hot replies from douban's discussion thread.
// @author       leyle@leyle.com
// @include      https://*.douban.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.getElementsByClassName('popular-hd')[0].remove();
    document.getElementsByClassName('topic-reply popular-bd')[0].remove();
})();
