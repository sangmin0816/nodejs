// 비구조 할당 destructuring assignment & allocation: 배열과 같은 reference 자료구조를 단일 기억장소(primitive type)로 변경
// assingment 할당, allocation 배당(비율별로)

const person = ["kim", "lee", "park", "choi"]; // 배열

// 비구조 할당
let p0 = person[0];
let p1 = person[1];

const member = {
   id: "kim",
   age: 10,
   addr: "마리오아울렛",
   tel: "010-1111-2222"
}
// // 복합체인 객체를 비구조 할당.
// let id = member.id;
// let age = member.age;

// 배열 구조를 분해하여 비구조 할당
let [k1, k2, k3, k4] = person;
[k2, k1, k4, k3] = [k1, k2, k3, k4]
console.log(`${k1} ${k2} ${k3} ${k4}`)

const [a, b, c] = ["JAVA", "C#"];
console.log(`${a} ${b} ${c}`) // JAVA C# undefined

const [d, e="spring", f = "NodeJS"] = ["JAVA", "C#"];
console.log(`${d} ${e} ${f}`); // JAVA C# NodeJS

const [g, , h, i] = ["G", "E", "H", "I"];
console.log(`${g} ${h} ${i}`); // G H I

// 객체도 마찬가지로 분해 가능하다
let {id, age, addr, tel} = member;
console.log(`${id} ${age} ${addr} ${tel}`);

// let {o1, o2, o3, o4} = {age: member.age, id:member.id, addr: member.addr, tel: member.tel};
// console.log(`${o1} ${o2} ${o3} ${o4}`);