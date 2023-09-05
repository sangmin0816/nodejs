const fs = require("fs")
fs.readFile('./hello.txt', function(err, data){
   console.log(data)
})

// 인코딩 안 되고 버퍼로 들어옴
// 강의 앞에 꺼는 대충 녹화, 녹음한 거 있는데 그거 보내줄게
// 스프링 노드부터는 패키지 관리자 파일이 필요하다. 
// 노드는 설치하자마자 npm이 같이 설치된다.
// require처럼 들고오고 싶으면 npm으로 설치만 하면 된다.
// 조각조각 노드 모듈이 설치된다. 우리가 설치한 모듈.
// js에서 웹 모듈 설치. iml에 저장되어있었음.
// 여기는 package.json에 저장됨

var es5 = {
   name: "kim1",
   point: 100
}

// es6에서는 객체를 새로운 방법으로 선언할 수 있다.
let es6 = new Object();
es6.name = "kim2";
es6.point = 100;

console.log(`es5: ${es5.name}, ${es5.point} / es6: ${es6.name}, ${es6.point}`); // 필드에 의한 접근
console.log(`es6: ${es6['name']}`); // 키에 의한 접근

for(let item in es6){
   console.log(`${item}: ${es6[item]}`);
}

// js파일 각각을 모듈화할 수 있다.