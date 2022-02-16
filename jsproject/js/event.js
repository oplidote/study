window.onload = function () {

    let wrap = document.getElementById('wrap');
    let box = document.getElementById('box');
    let inner = document.getElementById('inner');

    inner.onclick = function () {
        alert('Inner 클릭');
    }
    box.onclick = function (e) {
        e.stopPropagation();
        alert('box 클릭');
    }
    wrap.onclick = function (event) {
        stopPropagation();
        alert('wrap 클릭');
    }
}