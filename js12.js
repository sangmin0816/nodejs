// 노드의 내장 모듈
const fs = require("fs");
fs.readFile("./kim.txt", "utf-8", function (err, data){
   console.log(data);
});