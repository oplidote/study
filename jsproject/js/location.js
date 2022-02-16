window.onload = function () {
    bt.onclick = function (e) {

        // http://127.0.0.1:5500/index.html?test=5#hi
        // 주소의 hash 리턴
        // #hi 
        console.log(location.hash);
        // 주소의 호스트와 포트번호
        // 5500
        console.log(location.host);
        console.log(location.port);
        // 주소의 파일명(경로)
        // /index.html
        console.log(location.pathname);
        // 주소를 리턴
        // http://127.0.0.1:5500/index.html?test=5#hi
        console.log(location.href);
        // 주소의 프로토콜을 리턴
        // http: (mailto:tel)
        console.log(location.protocol);
        // 쿼리 문자열
        // ?test
        console.log(location.search);
    }
}