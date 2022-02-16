window.onload = function () {

    let bt = document.getElementById('bt');
    let bt2 = document.getElementById('bt2');
    let bt3 = document.getElementById('bt3');

    bt.onclick = function (event) {
        // 이전 페이지로 이동
        history.back();
    }

    bt2.onclick = function (e) {
        // 이후 페이지로 이동
        history.forward();
        //    history.forward();
        //    history.forward(2);
    }

    bt3.onclick = function (e) {
        // 숫자값에 따라서 양수 만큼
        // 음수만큼 페이지 이동
        history.go(2);
    }

}