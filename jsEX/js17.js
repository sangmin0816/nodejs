const http = require("http");
const fs = require("fs");
const url = require("url");

// 4팀은 포트번호 3400;
let port = 3400;
let host = "127.0.0.1";

const server = http.createServer(function(req, res){
   res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
   var queryData = url.parse(req.url, true).query;
   
   var content = `
   <!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>템플릿</title>
</head>
<body>
   <div class="container">
      <nav>
         <ul>
            <li><a href="/?msg=link1">링크1</a></li>
            <li><a href="/?msg=link2">링크2</a></li>
            <li><a href="/?msg=link3">링크3</a></li>
         </ul>
      </nav>
      <h2>What you Clicked: ${queryData.msg} </h2>
   </div>
</body>
</html>
   `;
});

server.listen(port, host, function(){
   console.log(`Server running at http://${host}:${port}/`);
});