let name = "kim";
let age = 41;

console.log(`${name}: ${age}`);

let tag = function(strings, personExp, ageExp){
   console.log(`${strings} ${personExp} ${ageExp}`);
}
let output = tag`그 사람 ${"choi"}인 ${age}입니다.`; // 그 사람 ,인 ,입니다. choi 41
// 전체 모든 문자열은 strings에, el은 각각 변수에 배분된다.

tag(`그 사람 ${"choi"}인 ${age}입니다.`); // 그 사람 choi인 41입니다. undefined undefined
// 백틱으로 서버로 넘길 수 있다.
// 문장과 데이터를 분리할 때 사용한다.