const http = require("http");
const url = require("url");
const qs = require("querystring");
const fs = require("fs");
const path = require("path");

let port = 3400;
let host = "127.0.0.1";

var template = {
   HTML:function(title, list, body, control){
     return `
     <!doctype html>
     <html>
     <head>
       <title>WEB1 - ${title}</title>
       <meta charset="utf-8">
       <style>
         body {
             display: flex;
             flex-direction: column;
             align-items: center;
             background-color: lightgray;
         }
         #background {
             background-color: white;
             height: auto;
             width: 90%;
             max-width: 450px;
             box-shadow: 0px 40px 30px -20px rgba(0, 0, 0, 0.3);
         }
         .titlebar {
             background-color: #F9F9F9;
             font-weight: 400;
             border: none; border-bottom: 1px solid #CCCCCC;
             padding: 18px;
         }
         .content {
             padding: 20px;
             max-height: max-content;
         }
         .btncover {
             display: flex;
             padding: 20px 10px 10px 10px;
         }
         .btn {
             font-size: 15px;
             text-decoration: none;
             text-align: center;
             background-color: white;
             color: black;
             border: 1px solid lightgray;
             padding: 5px 10px;
             margin: 5px;
             display: inline-block;
             cursor: pointer;
             border-radius: 3px;
         }
       </style>
     </head>
     <body>
       <h2><a href="/" style="color:black; text-decoration: none; text-align: center;">Node.js 게시판 구현</a></h2>
       <div id="background">
         <div class="titlebar">글 목록</button></div>
         <div class="content">
             ${list}
         </div>
         <div class="titlebar">글 내용</button></div>
         <div class="content">
             ${body}
             ${control}
         </div>
       </div>
     </body>
     </html>
     `;
   },list:function(filelist){
     var list = '<ul>';
     var i = 0;
     while(i < filelist.length){
       list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
       i = i + 1;
     }
     list = list+'</ul>';
     return list;
   }
 }

const server = http.createServer(function(req, res){
   res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
   var _url = url.parse(req.url, true).pathname;
   var queryData = url.parse(req.url, true).query;

   switch (_url) {
      case "/":
         res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
         var syncData = fs.readFileSync("./home.html", "utf-8");
         let content = String.raw`${syncData}`;
         res.write(content);
         res.end();
         break;
      case "/create":
         break;
      case "/create_pro":
         break;
      case "/update":
         break;
      case "/update_pro":
         break;
      case "/delete":
         break;
      default:
         res.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
         res.write("<h2>404 Not Found</h2>");
         res.end();
         break;
   }
});

server.listen(port, host, function(){
   console.log(`Server running at http://${host}:${port}/`);
});