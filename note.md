# 웹 구성 요소

	웹 표준 : 웹 사이트를 작성할 때 따라야 하는 공식 표준이나 기술 규격
	웹 접근성 : 장애의 여부와 상관 없이 모두가 웹사이트를 이용할 수 있게 하는 방식
	크로스 브라우징 : 모든 브라우저. 또는 기기에서 사이트가 제대로 작동하도록 하는 기법

## HTML : 웹사이트에서 눈에 보이는 정보나 특정 구역을 설정할 때 사용하는 언어
1. html 기본 문법 작성
2. body 주석 우선 작성
# images
  .png : (포토샵 - 투명배경 사진)
  .jpg : (포토샵 - 불투명배경 사진)
  .gif : (포토샵 - 애니메이션 그림)
  .svg : (일러스트레이터 - vector 그림)

## IE에서 edge 브라우저 형태로 강제 렌더링 하도록하는  메타태그
<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
웹 필수 구성요소 이다.
# 반응형이란?
  화면 너비에 맞게 레이아웃을 변경할 수 있다.
  css를 적극적으로 활용함

## div : block
# 미디어쿼리 주의사항
1. css 속성 상속
    미디어 쿼리 외부 영역의 css 속성을 상속받음
    상속 받고자 하지 않을시 none으로 따로 값을 지정

2. 메타태그 뷰포트 필수
    ex) <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
        width=device-width : viewport(디바이스) 의 가로폭
        initial-scale=1.0  : 비율은 항상 1.0 

# javascript

## 객체
var student= {
  name : "Gildong",
  age : 19,
  skills : ["studying", "eating", "sleeping"],
  sum : function (num1, num2) {
      return num1 + num2;
  }
}
## undefined는 변수 안에 데이터를 입력하지 않은 상태를 의미합니다.
var unde;  //undefined

## null은 개발자가 임의로 변수 안에 빈 데이터를 삽입한 상태를 의미합니다.
var empty = null;  //null

## Boolean은 참 또는 거짓인 상태를 의미합니다.
var t = true;
var f = false;

## 프로퍼티와 메서드 - 문자열
 .length : 변수 길이 확인
 .charAt : n번째 데이터 확인
 .split : 공백을 기준으로 문자열 나누기
 ex)
    var str1 = "Hi!Elice";

    str1.length;  // 8
    str1.charAt(1);  // i
    str1.split("!");  // [Hi, Elice]

## 프로퍼티와 메서드 - 배열
.length : 변수의 길이
.push : 배열 맨 끝자리에 데이터 추가
.unshift : 배열 맨 앞자리에 데이터 추가
.pop : 배열 맨 끝 데이터 제거
.shift : 배열 맨 앞 데이터 제거
ex)
    var fruit = ["사과", "배", "포도"];

    fruit.length;  //3
    fruit.push("딸기");  // ["사과", "배", "포도", "딸기"]
    fruit.unshift("레몬");  // ["레몬", "사과", "배", "포도", "딸기"]
    fruit.pop();  // ["레몬", "사과", "배", "포도"]
    fruit.shift();  // ["사과", "배", "포도"]

## 프로퍼티와 메서드 - Math
.abs : 절댓값
.ceil : 올림값
.floor : 내림값
.random : 임의의 수

ex)
    Math.abs(-12);  // 12
    Math.ceil(3.4);  // 4
    Math.floor(5.6);  //5
    Math.random();  // 0과 1 사이의 임의의 숫자 출력

## 프로퍼티와 메서드 - 문자를 숫자로 변환하는 메서드
parseInt : 정수형 데이터 타입 변환
parseFloat : 실수형 데이터 타입 변환
ex)
    parseInt("20.6");  // 20
    parseFloat("20.6");  // 20.6

## 산술연산자
ex)
console.log(10 + 5);  // 15
console.log(10 - 5);  // 5
console.log(10 * 5);  // 50
console.log(10 / 5);  // 2
console.log(10 % 5);  // 0
console.log("10" + "5");  // 105

## 증감연산자

증감 연산자는 ++, –로 작성됩니다. ++는 1씩 증가, --는 1씩 감소를 의미합니다.

ex)
var num = 10;

console.log(++num);
console.log(--num);
console.log(num++);
console.log(num--);

## 비교연산자

비교 연산자는 값으로 Boolean 데이터 타입인 true 혹은 false을 반환합니다.

ex)
console.log(10 == 20);
console.log(10 === 20);
console.log(10 !== 20);

console.log(10 > 20);
console.log(10 >= 20);

console.log(10 < 20);
console.log(10 <= 20);

## 논리연산자 
&& : and
|| : or

ex)
console.log(1 === 1 && 2 === 3);
console.log(1 === 1 || 2 === 3);

## if 조건문
ex)

var a = 3;
var b = 6;

if ( a === b ) {
    console.log("a와 b는 같다.");
}

## if else 조건문
ex)
var a = 3;
var b = 6;

if ( a === b ) {
    console.log("a와 b는 같다.");
} else {
    console.log("a와 b는 다르다.");
}

## else if 문
ex)
var a = 3;
var b = 6;
var c = 9;

if ( a > b ) { 
document.write("a는 b보다 크다.");
} else if ( b > c ) { 
document.write("b는 c보다 크다.");
} else if ( a < c ) { 
document.write("a는 c보다 작다.");
} else if ( b < c ) { 
document.write("b는 c보다 작다.");
} else { 
document.write("모든 조건을 만족하지 않는다.");
}

## 중첩 if 문
ex)

var a = 3;
var b = 6;

if ( a !== b ) {

  if (a > b) { 
    console.log("a는 b보다 크다"); 
  } 
  else { 
    console.log("a는 b보다 작다"); 
  }

} else { 
  console.log("a와 b는 같다"); 
}

## 반복문 - while 문
ex)
var num = 0;

while (num < 10) {
    console.log(num);
    num++;
}
## 조건문 do~while문
ex)
var i = 3;

do {
    console.log(i);
    i--;
} while (i > 0);

// 3 2 1 0
## 반복문 - for 문
ex)
for (var i = 0; i < 10; i++) {
    console.log(i);
}

#   jquery

## jquery 사용 조건
    순서 선언 -> 사용 
  선언 : <script src="jquery-3.6.0.js"></script>
  사용 : <script src="index.js"></script>

## 제이쿼리 선택자 종류
$(“태그명”)
$(“#아이디 속성값”)
$(“.클래스 속성값”)

## 제이쿼리 이벤트 - Mouse 이벤트
$("h1").mouseenter(function(){
 // 대상에 마우스 올렸을 때 수행할 기능
});

$("h1").mouseleave(function(){
 // 대상에 마우스 떼었을 때 수행할 기능
});

$("h1").click(function(){
 // 대상에 클릭했을 때 수행할 기능
});  

## 제이쿼리 이벤트 - Hide, Show, Toggle 이벤트

$("h1").hide();  // 대상 감추기
$("h1").show();  // 대상 나타내기
$("h1").toggle();  //hide와 show

## 제이쿼리 이벤트 - Fade 이벤트

$("h1").fadeOut();  // 대상을 서서히 사라지게
$("h1").fadeIn();  // 대상을 서서히 나타나게
$("h1").fadeToggle();  // fadeOut과 fadeIn

## 제이쿼리 이벤트 - Class 이벤트
$("h1").addClass();  // 대상에 괄호 안 클래스 추가
$("h1").removeClass();  // 대상에 괄호 안 클래스 제거
$("h1").toggleClass();  // addClass와 removeClass
$("h1").hasClass();  // 대상에 괄호 안 클래스 있는지 확인
    ex)
    $(function() {
        $(".addclassbtn").click(function(){
            $("h1").addClass("blue");
            $("h2").addClass("important");
        });
    });
## 제이쿼리의 this
 this는 어느 특정 영역에 이벤트를 적용할 때, 실제 이벤트가 발생되는 선택된 영역을 의미합니다.
ex)
var $title = $(".title");

$title.click(function() {
    $(this).toggleClass('on');
}

## background-size
배경 이미지 크기를 정하는 속성입니다.
 
contain : 이미지 전체가 화면에 출력
cover : 화면 전체에 이미지 출력

## background-attachment
배경 이미지를 고정하는 방식에 영향을 미치는 속성입니다.

scroll : 컨텐츠와 함께 움직임
fixed : 배경에 고정됨 스크롤에 따라 움직이지 않음

## translate

top:50% = 전체화면의 y축 중앙 배치
translate = 부모의 y축 중앙 배치

## 패럴렉스 효과


## 이미지 슬라이드 효과 (롤링)
<!-- 
index.html
<div id="slider">

        <ul class="slides">                             
            <li class="slide"></li>
            <li class="slide"></li>
            <li class="slide"></li>
            <li class="slide"></li>
            <li class="slide"></li>
            <li class="slide"></li>
        </ul>

</div>


index.js

$(function() { 슬라이드 함수 
  var $slider = $("#slider");                       $slider 변수에 id = "slider" 할당
  var $slides = $slider.find('.slides ');           $slider 변수 속 class = "slides" 찾아서 $slides 에 할당
  var $slide = $slides.find('.slide');              $slides 변수 속 class = "slide" 찾아서 $slide 에 할당
  
  var currentSlide = 1;
  
  setInterval(function(){
  
  $slides.animate({'margin-left' : "-=" + 1024}, 1000, function(){
  
    currentSlide++;
    if(currentSlide === $slide.length) {
        currentSlide = 1;
        $slides.css ("margin-left", 0);
    }
  })
  
  
  },3000)
  
  
});
-->

## attr 
속성값을 가져오는 코드
$(function() {
  $(".tabs-list li a").click(function(e) {
  e.preventDefault();
  });
  
  $(".tabs-list li").click(function(){
  
    var $tabId=$(this).find("a").attr("href");
    
    $(".tabs-list li, .tabs div.tab").removeClass("active");
    
    $($tabId).addClass("active");
    $(this).addClass("active");
    
  })
});
## 슬라이드 기능
prev() : 이전 요소를 선택합니다.
next() : 다음 요소를 선택합니다.
first() : 첫 번째 요소를 선택합니다.
last() : 마지막 요소를 선택합니다.

### js
$(function() {
  $(".right-arrow").click(function(){
  
    var $curSlide = $("#photo .slide.active");
    var $nextSlide = $curSlide.next(); 
  
    $curSlide.fadeOut().removeClass("active");
    $nextSlide.fadeIn().addClass("active");
    
    if ($nextSlide.length ===0) {
    $("#photo .slide").first().fadeIn().addClass("active");
    }
  });
  
});

## input
<input> 짧은 입력을 처리 html 태그 <input> type 속성값에 의해 종류가 결정

<input>태그 사용시 <label> 태그와 한 쌍을 이루어야 한다

text : 짧은 글자를 입력
email : 이메일 양식을 입력
password : 패스워드 양식을 입력
radio : 라디오 버튼 생성             // 중복체크 불가능한 체크박스 name 인자로 카테고리 분류 ex) 성별
checkbox : 체크박스 버튼 생성
          <label for="topic">제목</label>
          <input type="text" id="topic" name="topic">

          <label for="email">이메일 주소</label>
          <input type="email" id="email" name="email">

          <label for="pw">비밀번호</label>
          <input type="password" id="pw" name="pw">

## textarea
 <input type=“text”>보다 장문의 글자를 입력할때 사용

 ex) 메시지 내용

## css
default

@charset 'utf-8'
@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');

* {
    margin:0;
    padding:0;
    box-sizing:border-box;
    /* outline-style: none; */
}

<!-- default setting 
@charset 'utf-8';
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
    /* outline-style: none; */
}

a{
    color: #333;
    text-decoration: none;
}
li{
    list-style: none;
}
img{
    border: 0;
    vertical-align: middle;
}
html{
    font-size: 10px;
}
body {
    font-family: 'Nanum Pen Script', cursive;
    color:red;
    font-size: 12px;
    color: #333;
    line-height: 16px;
    letter-spacing: -0.58px;
    font-weight: 400px;
}
-->

속성 선택자 
.container[my="age"] {

}

## background-attachment: fixed;
배경고정
## float:left & overflow : hidden 쌍으로 상용

## transition 속성
   움직이게 하고 싶은 레이아웃에 배치
  ex)
    transition-property: left, top;
    transition-duration: 3s, 5s;
    transition-delay: 0.3s, 0;
    transition-timing-function: ease-in, ease,out;
    
  :hover :active transition 동작 조건 설정 후
  변화의 결과를 hover,active 태그에 입력
  관련사이트) 'cubic-bezier'