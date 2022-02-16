window.onload = function () {

    let bt = document.getElementById('bt');
    let bt2 = document.getElementById('bt2');
    let bt3 = document.getElementById('bt3');

    bt.onclick = function(e){
        function add(){
            alert('안녕');
        }
        let st = setTimeout(add,5000);
    }
    bt2.onclick = function(e){
        location.reload();
    }
    bt3.onclick = function(e){
        location.replace('http://www.naver.com')
    }
}