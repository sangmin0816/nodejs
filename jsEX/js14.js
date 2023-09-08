const fs = require("fs");

// 비동기식 입력
fs.writeFile("./kim.txt", "Write async", (err)=>{
   fs.readFile("./kim.txt", "utf-8", (err, result)=>{
      console.log(result)
   })
});

// 동기식 입력
fs.writeFileSync("./kim.txt", "Write sync");
console.log(fs.readFileSync("./kim.txt", "utf-8"))

// 비동기식 수정
fs.readFile("./kim.txt", "utf-8", (err, result)=>{
   console.log(result);
   fs.writeFile("./kim.txt", result+"내용 추가", (err)=>{console.log(err);});
})

// 파일 이름 바꾸기
// fs.renameSync("./hi.txt", "./hello.txt", (err)=>{console.log(err);})
fs.rename("./hello.txt", "./hi.txt", (err)=>{console.log(err);});

// 파일 삭제
fs.unlink("./dummy.txt", (err)=>{console.log("파일 삭제")});
fs.unlinkSync("./dummy2.txt", (err)=>{console.log("파일 삭제")});