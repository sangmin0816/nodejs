var calc = require("./calc");
// require 확장자를 붙이지 않는다.
// 외장 모듈의 경우 보통 var로 가져오고, 내장 모듈의 경우 const로 가져온다. 

console.log(`더하기: ${calc.add(3, 5)}`);
console.log(`빼기: ${calc.sub(3, 5)}`);
console.log(`곱하기: ${calc.mul(3, 5)}`);
console.log(`나누기: ${calc.div(3, 5)}`);
console.log(`나머지: ${calc.mod(3, 5)}`);