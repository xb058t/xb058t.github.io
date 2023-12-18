
let fontSize = {
    h1: null,
    h2: null,
    h3: null,
    h4: null,
    h5: null,
    h6: null,
    body: null
}

function getsize(tag) {
    try {
        return window.getComputedStyle(document.getElementsByTagName(tag)[0], null).getPropertyValue('font-size');
    }
    catch (err) { }
    return null;
}

window.onload = function () {
    fontSize.h1 = getsize('h1') || '2.125rem';
    fontSize.h2 = getsize('h2') || '1.875rem';
    fontSize.h3 = getsize('h3') || '1.5rem';
    fontSize.h4 = getsize('h4') || '1.25rem';
    fontSize.h5 = getsize('h5') || '1.125rem';
    fontSize.h6 = getsize('h6') || '1rem';
    fontSize.body = getsize('body') || '1rem';
}

function textSizeIncrease() {
    let body = document.getElementsByTagName('body')[0];
    let size = window.getComputedStyle(body, null).getPropertyValue('font-size');
    let fontSize = parseFloat(size);
    body.style.fontSize = (fontSize + 1) + 'px';
    body.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function (element) {
        let size = window.getComputedStyle(element, null).getPropertyValue('font-size');
        let fontSize = parseFloat(size);
        element.style.fontSize = (fontSize + 1) + 'px';
    });
}

function textSizeDecrease() {
    let body = document.getElementsByTagName('body')[0];
    let size = window.getComputedStyle(body, null).getPropertyValue('font-size');
    let fontSize = parseFloat(size);
    body.style.fontSize = (fontSize - 1) + 'px';
    body.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function (element) {
        let size = window.getComputedStyle(element, null).getPropertyValue('font-size');
        let fontSize = parseFloat(size);
        element.style.fontSize = (fontSize - 1) + 'px';
    });
}

function textSizeReset() {
    let body = document.getElementsByTagName('body')[0];
    body.style.fontSize = fontSize.body;
    body.querySelectorAll('h1').forEach(function (element) {
        element.style.fontSize = fontSize.h1;
    });
    body.querySelectorAll('h2').forEach(function (element) {
        element.style.fontSize = fontSize.h2;
    });
    body.querySelectorAll('h3').forEach(function (element) {
        element.style.fontSize = fontSize.h3;
    });
    body.querySelectorAll('h4').forEach(function (element) {
        element.style.fontSize = fontSize.h4;
    });
    body.querySelectorAll('h5').forEach(function (element) {
        element.style.fontSize = fontSize.h5;
    });
    body.querySelectorAll('h6').forEach(function (element) {
        element.style.fontSize = fontSize.h6;
    });
}