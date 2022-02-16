window.onload = function(){

    let bt = document.getElementById('bt');
    let bt2 = document.getElementById('bt2');
    let bt3 = document.getElementById('bt3');

    bt.onclick = function(event){
        // 화면너비
        let w = screen.width;
        // 화면높이
        let h = screen.height;
        // 작업표시줄 뺀 너비
        let aw = screen.availWidth;
        // 작업표시줄 뺀 높이
        let ah = screen.availHeight;
        // 화면 색상표현 숫자
        let co = screen.colorDepth;
        // 화면 해상도
        let pd = screen.pixelDepth;

        console.log(w)
        console.log(h)
        console.log(aw)
        console.log(ah)
        console.log(co)
        console.log(pd)
    }

    bt2.onclick = function(e) {
        // 현재 페이지 갱신
        location.reload();
    }

    bt3.onclick = function(e){
        // 특정 페이지로 이동
        location.replace('http://www.google.com');
    }

}