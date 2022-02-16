window.onload = function () {

    let bt = document.getElementById('bt');
    let bt2 = document.getElementById('bt2');
    let bt3 = document.getElementById('bt3');

    bt.onclick = function (event) {
        // 웹브라우저의 코드, 버전
        let agent = navigator.userAgent;
        console.log(agent);
        //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36
        let browser = '';
        if(agent.match(/Trident/)) {
            browser = '인터넷 익스프롤러';
        }else if(agent.match(/Chrome/)) {
            browser = '크롬';
        }else if(agent.match(/Firefox/)) {
            browser = '파이어폭스';
        }else {
            browser = '몰라요';
        }
        alert(browser);
    }

    bt2.onclick = function (e) {

    }

    bt3.onclick = function (e) {

    }

}