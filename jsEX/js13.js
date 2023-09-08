const fs = require("fs");

// 비동기 방식 출력: 불러온 데이터 중에서 일부만 컨트롤 하는 경우
fs.readFile("./kim.txt", "utf-8", function (err, data){
   console.log(data);
   if(err===undefined){console.log(err)};
});

// 동기 방식 출력: 한 꺼번에 파일 전체 내용을 불러올 경우
var syncData = fs.readFileSync("./kim.txt", "utf-8");
console.log(syncData);

// 