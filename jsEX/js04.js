// 함수 정의와 호출
var fnc1 = function(){
   console.log("노 매개변수, 노 반환")
}

var fnc2 = function(a, b){
   console.log(`매개변수 ${a}와 ${b}의 합은 ${a+b}`)
}

var fnc3 = function(){
   return 3*3;
}

var fnc4 = function(a, b){
   return a*b;
}

fnc1();
fnc2(1, 2);
console.log(fnc3());
console.log(fnc4(3, 3))

var arr = [1, 2, 3, 4];

// 배열을 순회하는 함수 map
var arr_power = arr.map(function(value){
   return value*value;
})
// 익명의 함수: 특정 로직이나 함수(메소드) 이름 없이 곧바로 실행되는 함수
console.log(arr_power);
