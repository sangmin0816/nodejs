const http = require("http");

let node = "Node";
// 노드 단의 3000 사용
// 익스프레스 4000 사용
// 리액트 단은 5000
let content = String.raw`<h1>Hello World! ${node}</h1>`;
const server = http.createServer(function(req, res){
   res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
   res.end(`${content}`);
   // 띄워질 내용을 넣어줌
});
server.listen(3000, function(){});

// jsp: index, servlet:mainctrl, spring:home