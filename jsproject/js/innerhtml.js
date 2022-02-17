window.onload = function () {

    let bt = document.getElementById('bt');
    let popup = document.getElementById('popup');
    
    function inHtml() {
        // html을 직접 실행
        // innerHTML = '태그';
        popup.innerHTML = '<a href=http://www.naver.com target=_black>네이버</a>'


    }

    bt.onclick = inHtml;

}