//최초 기본형
$(document).ready(function () {

    // 주메뉴 데이터
    // 객체 생성자 함수
    function LinkData(_txt, _link, _tg){
        this.txt = _txt;
        this.link = _link;
        this.target = _tg;
    } 

    let menu_data = [
        new LinkData('회사소개', 'company.html', '_self'),
        new LinkData('제품소개', 'product.html', '_self'),
        new LinkData('고객센터', 'faq.html', '_self'),
        new LinkData('관리자메일', 'mailto:aaa@aaa.net', '_self')
    ];

    // 내용을 적용할 nav 클래스 저장
    let nav = $('.nav');
    // 완성할 문장
    let result = '<ul>';

    $.each(menu_data, function (index, item) {
        let temp = item;
        result = result + '<li>';
        
        result = result + '<a href=\"';
        result = result + temp.link;
        result = result + '\" target=\"';
        result = result + temp.target;
        result = result + '\">';

        result = result + temp.txt;
        result = result + '</a>';
        result = result + '</li>';
    });

    result = result + '</ul>';

    nav.html(result);

    nav.css('position', 'relative');
    nav.css('width', '600px');
    nav.css('margin', '0 auto');
    nav.css('height', '80px');
    nav.css('background-color', '#000') ;

    nav.find('>ul').css({
        position: 'relative',
        width: '100%',
        overflow: 'hidden'
    });

    nav.find('>ul>li').css({
        position:'relative',
        display: 'block',
        width: '25%',
        float:'left',
        textAlign: 'center',
        lineHeight: '80px'
    });

});