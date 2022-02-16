// 내부 객체
//  객체는 속성 과  기능 있어요.
//  Object 는 Property 와 Method

// num = 46000*0.7;
// console.log(num);
// // 구분자 로 분리하기
// str='Java_Script';
// // 글자를 바꾸기
// str = 'javascript';
// console.log(str.replace('java', 'JAVA')); //
// console.clear();
// let arr = ['1','qwd','ff','d1d','f4f','d1'];
// let arr2 = ['14','q53wd','2f4f','4d12d','4f44f','d1'];
// console.log(arr.length);
// console.log(arr2.length);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.clear();
// console.log(arr.slice(0, 3)); //
// console.clear();

// // 배열을 연결합니다.
// let a = [1,2,3];
// let b = ['a', 'b', 'c'];
// let c = a.concat(b);
// console.log(c);//
// console.log(c.shift());// 0 자리 제거
// console.log(c);//  속성값 변화 o
// console.clear();
// console.log(c.unshift('js'));// 0 자리 밀어넣기
// console.log(c);//  속성값 변화 o
// console.clear();
// // 배열의 요소를 삭제한다.
// console.log(c.pop());   // 마지막 요소 제거
// console.log(c);   //  속성값 변화 o
// console.clear();
// console.log(c.push('js'));// 마지막 자리 밀어넣기
// console.log(c);   //  속성값 변화 o
// console.clear();

// // // 배열 특정 부분 추가 삭제 변경.
// // c.splice(1,0,'h1');
// // // 1번 자리에 0개 삭제 후 'h1' 추가
// // console.clear();
// // c.reverse(); // 역으로 배치
// // console.log(c); // 속성값 변화 o


// // // 배열 정렬
// // c = [11,2,4,52];
// // c.sort(function(a,b){
// //     return a-b;
// // });
// // c.sort(function(a,b){
// //     return b-a;
// // });
// // console.log(c);
// // console.clear();

// // let city =['서울','대전','대구','포항','부산'];
// // for(let i = 0; i < city.length;i++){
// //     console.log(city[i]);
// // }

// // // 객체의 요소만큼 반복 출력.. 대박
// // for(let i of city){
// //     console.log(i);
    
// // }
// // console.clear();


// city.forEach(function(value,index,array){
//     return txt = txt + value;
// });
// console.log(txt);

// let num = [1,2,3,4,5,6,7,8,9,10];
// let result = 0;
// num.forEach(function(value,index,array){
//     return result = result + value;
// });
// console.log(result);
// console.clear();

// // 배열을 복제하여서 새로운 배열로 만들어준다.

// num.map(function(value,index,array){
//     console.log(value);
//     console.log(index);
//     console.log(array);
// });
// console.clear();

// let num_arr = num.map(function(v,i,a){
//     return v * 5;
// });
// console.log(num_arr);
// console.clear();

//배열을 조건식을 이용해서 새로운 배열을 생성한다.

// let arr = ['a',1,'b',2,'c',3,'100'];
// let new_arr = ['a',1,'b',2,'c',3,'100'];
// arr.filter(function(v,i,a){
//     console.log(v);
//     console.log(i);
//     console.log(a);
// });
// new_arr.filter(function(v,i,a){
//     return typeof value === 'number';
// });
// console.log(new_arr);
