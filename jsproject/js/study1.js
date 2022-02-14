//  내장 함수

let txt = '자바스크립트';
console.log(encodeURIComponent(txt));
console.log(decodeURIComponent(txt));

let num = '글자';
let result = isNaN(num);
if (result == true) {
    console.log('글자');
} else if (result == false) {
    console.log('숫자');
}
// 값이 무한대 인지 아닌지 판단
let num2 = 1 / 0;
result = isFinite(num2);
if (result) {
    console.log('유한값');
} else {
    console.log('무한값');
}
// 숫자로 변경하기
let num3 = '10';
result = Number(num3);
console.log(typeof result);
num3 = '300px';
result - parseInt(num3);
// 문자로 변경하기
let str = 100;
result = String(str);
console.log(typeof result);
let num4 = 100;
result = 100 + '';
console.log(typeof result);

// 위험한 코드 글자를 js 로 변경하기
let str_1 = 'var num8 = 5';
let str_2 = 'var num9 = 9';
result = str_1 + str_2;
console.log(result);
eval(str_1);
eval(str_2);

// 객체
let human = { 
    eye: 2, 
    nose: 1, 
    mouth: 1,
    smile: function(){},
    cry : function(){}
}
human.eye;
human.cry();
human.ear = 2;
human.눈썹 = 2;
human.smile = function(){
    console.log('하하');
}
human.say = function(){
    console.log('말하자');
}