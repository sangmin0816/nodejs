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