$(document).ready(function () {

    // 내용별 section 을 저장한다.
    let section = $('.wrap > section');
    // 화면 이동속도 (1000은 1초)
    let section_speed = 500;

    // 일정 너비 이하는 일반 스크롤 
    let section_min_w = 760; // 값 결정은 개인적

    // 스크롤 바를 보여줄지 말지 결정( 1  스크롤바 보기  0 은 안보이기)
    let section_scrollbar = 0;

    // 현재 보여질 section 의 번호
    let section_index = 0;

    // 전체 section의 개수
    let section_total = section.length;

    // 스크롤을 화면 이동에 적용 할지 말지 여부 ( 0  적용함   1 적용안함)   
    let section_scroll = 0;

    // 스크롤 할때 마다 이동할 좌표 모음
    let section_pos = [];

    // 각 section 위치 저장
    $.each(section, function (index, item) {
        let temp = $(this).offset().top;
        section_pos[index] = temp;
    });

    // 최초 화면의 너비를 비교한다.
    let window_w = $(window).width();

    // 화면 너비 체크 기능
    function windowWidthFn() {
        // 화면 너비 파악
        window_w = $(window).width();

        // 최초 화면 너비가 760 보다 작다면
        if (window_w < section_min_w) {
            // 스크롤바를 보여줌.
            section_scroll = 1;
            $('html').css('overflow-x', 'hidden');
            $('html').css('overflow-y', 'auto');

        } else {
            // 스크롤바를 안보여줌.
            section_scroll = 0;
            $('html').css('overflow', 'hidden');

            $.each(section, function (index, item) {
                let temp = $(this).offset().top;
                section_pos[index] = temp;
            });

            // 모션없이 강제로 스크롤바 위치를 맞춘다.
            $(window).scrollTop(section_pos[section_index]);
        }

    }


    // 윈도우 리사이즈 처리
    $(window).resize(function () {
        windowWidthFn();
    });

    // 화면의 인덱스를 파악하기 위한 용도
    $(window).scroll(function () {

        //스크롤바가 보일때만 section_index 파악
        if (section_scroll == 1) {
            // 현재 스크롤바의 위치값을 파악
            let sc = $(window).scrollTop();

            console.log(sc);

            // section_index 파악
            for (let i = section_total - 1; i > 0 ; i--) {
                // section 들의 y 위치값
                let temp = section_pos[i];
                console.log('temp : ' + temp);
                // 현재 스크롤바의 위치값을 비교                
                if (sc > temp) {
                    section_index = i;
                    break;
                }
            }
        }
        console.log(section_index);
    });


    $(window).bind('mousewheel DOMMouseScroll', function (event) {
        var distance = event.originalEvent.wheelDelta;
        if (distance == null) {
            distance = event.originalEvent.detail * -1;
        }

        // 무조건 휠에 의한 작동을 하게 하면 안된다.
        if (section_scroll == 1) {
            return;
        }

        // 모션이 완료될때까지는 휠에 의한 위치 변화 안함.
        section_scroll = 1;

        if (distance < 0) {
            // console.log('화면 위');
            section_index = section_index + 1;

            if (section_index >= section_total) {
                section_index = section_total - 1;
                section_scroll = 0;
                return;
            }

        } else {
            // console.log('화면 아래');
            section_index = section_index - 1;

            if (section_index < 0) {
                section_index = 0;
                section_scroll = 0;
                return;
            }
        }

        sectionFn();

    });

    function sectionFn() {
        $('html').animate({
            // 위치로 이동
            scrollTop: section_pos[section_index]

        }, section_speed, function () {
            // 원하는 작업을 마무리 했으므로, 
            // 다시 스크롤 이벤트를 받아서 적용하겠다.
            section_scroll = 0;
        });
    }

    // 최초에 한 번실행
    windowWidthFn();

});