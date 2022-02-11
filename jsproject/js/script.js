window.onload = function () {

    // 오늘이 월요일이면 원래 술마셔요.
    // 오늘이 화요일이면 화나서 술마셔요.
    // 오늘이 수요일이면 슬퍼서 술마셔요.
    // 오늘이 목요일이면 목말라서 술마셔요.
    // 오늘이 금요일이면 불타서 술마셔요.
    // 오늘이 토요일이면 토할만큼 술마셔요.
    // 오늘이 일요일이면 일하기전에 술마셔요.

    let today = '금토일';

    if(today == '월') {
        console.log('원래 술마셔요.');
    }else if(today == '화') {
        console.log('화나서 술마셔요.');
    }else if(today == '수') {
        console.log('슬퍼서 술마셔요.');
    }else if(today == '목') {
        console.log('목말라서 술마셔요.');
    }else if(today == '금') {
        console.log('불타서 술마셔요.');
    }else if(today == '토') {
        console.log('토할만큼 술마셔요.');
    }else if(today == '일') {
        console.log('일하기전에 술마셔요.');
    }else {
        console.log('오늘은 쉬세요.');
    }


}