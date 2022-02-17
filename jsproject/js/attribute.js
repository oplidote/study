window.onload = function(){

    let bt = document.getElementById('bt');
    let popup = document.getElementById('popup');
    function deleteTxt(){
        // 속성 읽기
        popup.removeChild(popup.firstChild);
        // 속성 삭제
        alert(popup.getAttribute('class'));
        // 속성 제거
        popup.removeAttribute('class');
        let a = document.createElement('a');
        a.setAttribute('href','http://www.naver.com');
        a.setAttribute('target','_blank');
        a.setAttribute('title','네이버보기');
        a.setAttribute('class','wow');
        let txt = document.createTextNode('네이버');
        a.appendChild(txt);
        popup.appendChild(a);
    }
    bt.onclick = deleteTxt;
}