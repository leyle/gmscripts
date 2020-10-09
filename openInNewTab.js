// ==UserScript==
// @name     OpenInNewTab
// @author   leyle@leyle.com
// @include http*/*/*
// @require https://code.jquery.com/jquery-3.5.1.min.js
// @charset  UTF-8
// ==/UserScript==

// open topic in new tab
$(document).ready(function () {
    $('a').on('click', function (event) {
        const url = $(this).attr('href');
        console.debug(`click url: ${url}`);
        if(shouldOpenInNewTab($(this))) {
            event.preventDefault();
            console.debug(`open url in new tab: ${url}`);
            window.open(url, '_blank');
        } else {
            console.debug(`open url follows its default behavior: ${url}`);
        }
    })
})

function shouldOpenInNewTab(e) {
    switch (true) {
        case hostHas('google'):
            return checkGoogle(e);
        case hostHas('gitlab.com'):
            return checkGitlab(e);
        case hostHas('medium'):
            return checkMedium();
        case hostHas('instapaper'):
            return checkInstapaper(e);
        case hostHas('uump4'):
            return checkUUMP4(e);
        case hostHas('btdx8.com'):
            return checkBTDX8(e);
        case hostHas('v2ex.com'):
            return checkV2EX(e);

        default:
            return false;
    }
}

function hostHas(domain) {
    return window.location.host.includes(domain);
}

// https://www.google.com
function checkGoogle(e) {
    return !!e.attr('ping');
}

// https://medium.com
function checkInstapaper(e) {
    const url = e.attr('href');
    return url.includes('read');
}

// https://medium.com
function checkMedium() {
    return true;
}

// https://www.uump4.net
function checkUUMP4(e) {
    return e.attr('href').includes('thread');
}

// https://www.btdx8.com
function checkBTDX8(e) {
    return e.attr('href').includes('torrent');
}

// https://www.v2ex.com
function checkV2EX(e) {
   return e.attr('href').includes('/t/');
}

function checkGitlab(e) {
    if(e.attr('href').includes('/-/')) {
        return false;
    }
    return true;
}