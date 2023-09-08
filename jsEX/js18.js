const http = require("http");
const url = require("url");
const qs = require("querystring");

const fs = require("fs");

var syncData = fs.readFileSync("./template.html", "utf-8");
let template = String.raw`${syncData}`;

// 4팀은 포트번호 3400;
let port = 3400;
let host = "127.0.0.1";

const server = http.createServer(function(req, res){
   res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
   var _url = url.parse(req.url, true).pathname;
   if(_url === "/"){
      res.end(template);
   } else if(_url === "/postTest"){
      var body = "";
      req.on('data', function(data){
         body = body + data;
         var msg = qs.parse(body).msg;
         res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>템플릿</title>
      </head>
      <body>
         <div class="container">
            <h2>What you write: ${msg}</h2>
         </div>
      </body>
      </html>
      `)
      })
   } else{
      res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
      res.end("404 Not Found");
   }
});

server.listen(port, host, function(){
   console.log(`Server running at http://${host}:${port}/`);
});

// 내일은 미니 프로젝트. 파일처리 이용해서 게시판. 글 치면 글 목록이 알아서 생긴다. 알아서 글 상세 내용이 보인다? 원페이지 형식 처리
// 