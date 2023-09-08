// 화살표 arrow 함수. 자바의 람다식과 같으며, ES6부터 지원한다.

// 매개변수가 없는 경우 var 함수명 = () => {}
// 매개변수가 하나인 경우 var 함수명 = x => {}
// 매개변수가 여러개인 경우 var 함수명 = (x, y) => {}
// 반환이 있는 경우 var 함수명 = x => {return 반환;}
// 반환만 있는 경우 생략 가능 var 함수명 = x => {반환;}

/*
var 함수명 = x =>{
   명령문1;
   명령문2;
};
*/


var fnc1 = () => console.log("노 매개변수, 노 반환");
var fnc2 = (a, b) => console.log(`매개변수 ${a}와 ${b}의 합은 ${a+b}`);
var fnc3 = () => 3*3; // return, 중괄호 생략도 가능하다.
var fnc4 = (a, b) => {return a*b;}

fnc1();
fnc2(1, 2);
console.log(fnc3());
console.log(fnc4(3, 3))

var arr = [1, 2, 3, 4];

// 배열을 순회하는 함수 map
var arr_power = arr.map(value => value*value);
console.log(arr_power);