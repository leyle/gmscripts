// ==UserScript==
// @name     OpenInNewTab
// @author   leyle@leyle.com
// @include http*/*/*
// @require https://code.jquery.com/jquery-3.5.1.min.js
// @charset  UTF-8
// ==/UserScript==

// todo
// 1. adds more debug logs to show which url is been hit

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
    // precheck
    // first check general conditions
    if(checkDefault(e)) {
        return true;
    } else {
        // check specical conditions
        switch (true) {
            case hostHas('google'):
                return checkGoogle(e);
            case hostHas('gitlab.com'):
                return checkGitlab(e);
            case hostHas('medium'):
                return checkMedium();
            case hostHas('instapaper'):
                return checkInstapaper(e);
            case hostHas('btdx8.com'):
                return checkBTDX8(e);
            case hostHas('v2ex.com'):
                return checkV2EX(e);
            case hostHas('douban.com'):
                return checkDouban(e);

            default:
                return false;
        }
    }
}

function hostHas(domain) {
    return window.location.host.includes(domain);
}

// default
// discuz's style -> url contains 'thread' or 'forum'
// github/gitlab source file -> '/blob/'
function checkDefault(e) {
    const url = e.attr('href');
    const keys = ['forum', 'thread', '/blob/'];
    for(const key of keys) {
        if(url.includes(key)) {
            console.debug(`[checkDefault]openUrlInNewTab hit: ${key}`);
            return true;
        }
    }
    return false;
}

// https://www.google.com
function checkGoogle(e) {
    return !!e.attr('ping');
}

// https://medium.com
function checkInstapaper(e) {
    const url = e.attr('href');
    if(url.includes('read')) {
        return true;
    }
    const aclass = e.attr('class')
    if(aclass.includes('js_domain_linkout')) {
        return true;
    }
    return false;
}

// https://medium.com
function checkMedium() {
    return true;
}

// https://www.btdx8.com
function checkBTDX8(e) {
    return e.attr('href').includes('torrent');
}

// https://www.v2ex.com
function checkV2EX(e) {
   return e.attr('href').includes('/t/');
}

// https://gitlab.com
function checkGitlab(e) {
    if(e.attr('href').includes('/-/')) {
        return false;
    }
    return true;
}

// https://douban.com
function checkDouban(e) {
    const url = e.attr('href');
    return url.includes('/topic/')
        || url.includes('/review/')
        || url.includes('/celebrity/')
        || url.includes('/subject/')
        || url.includes('doulist')
        || url.includes('/people/');
}
