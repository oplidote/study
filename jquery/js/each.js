// 최초 기본형
// html,css,js 만 로딩 완료 감시..
$(document).ready(function () {
    // id 선택하기
    //
    // .parent() : 상위태그
    // .parents() : 상위태그들
    // .next() : 다음 태그
    // .nextUntil() : 다음 태그들

    // 배열관련 함수
    let city = ['대구', '부산', '광주', '춘천'];
    // $.each(변수명, function (n번째, 아이템명) {}

    // $.each(city:대상, function (index:위치, item:값) {}
    // 대상.each(function(index,item){}) 가능
    $.each(city, function (index, item) {
        console.log(index);
        console.log(item);
    });

    // navi 클래스의 li를 저장한다.
    let navi_li = $('.navi').find('li');

    // let navi_li = $('.navi li');
    // let navi_li = $('.navi > li');
    console.log(navi_li);
    console.log(typeof navi_li);
    navi_li.each(function (index, item) {
        // console.log(index);
        // console.log(item);
        navi_li.eq(index).css('border', '3px solid black');
        $(this).mouseenter(function () {
            $(this).css('background', 'yellow');
        });
        $(this).mouseleave(function () {
            $(this).css('background', 'green');
        });
    });
    
});





// html,css,js,image,sound,movie..;
window.onload = function () {

}