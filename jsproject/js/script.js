window.onload = function () {
    let login = document.login;
    login.onsubmit = function(){
        // 아이디가 입력이 되었는지 검사
        if(!login.id.value) {
            alert('아이디입력요망');
        }
        login.id.focus();
        return false;
        if(!login.pw.value) {
            alert('패스워드입력요망');
        }
        login.pw.focus();
        return false;
    }
    console.log(login.go.value);
}