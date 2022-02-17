window.onload = function () {
    // css선택자 를 활용하여서 선택하기
    // querySelector('css 선택자')
    let list_1 = document.querySelector('#box-1 > ul > li');
    console.log(list_1);
    list_1.style.background = '#ff0000';


    let list_2 = document.querySelectorAll('#box-2 > ul > li');
    console.log(list_2);
    // list_2.style.background = 'yellow';
    list_2[0].style.background = 'yellow';
    list_2.item(1).style.background = 'blue';

    //document.querySelectorAll('css선택자')
    // - 여러개를 선택할 수 있다.
    // - []의 형태로 선택이 된다.
    // - 선택결과[인덱스]로 접근가능
    // - 선택결과.item(인덱스)로 접근가능
}