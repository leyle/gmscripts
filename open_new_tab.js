// ==UserScript==
// @name     OpenInNewTab
// @author   leyle@leyle.com
// @include  https://www.uump4.net/*
// @include  http://sexinsex.net/*
// @require  https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @grant    unsafeWindow
// @run-at   document-end
// @charset  UTF-8
// ==/UserScript==

var as = document.getElementsByTagName("a");

for(var a of as) {
    var href = a.href
    if(href.includes("thread")) {
        a.setAttribute("target", "_blank")
    }
}
