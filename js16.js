const http = require("http");
const fs = require("fs");

var syncData = fs.readFileSync("./template.html", "utf-8");
let content = String.raw`${syncData}`;

let port = 3000;
let host = "127.0.0.1";

const server = http.createServer(function(req, res){
   res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
   res.end(content);
});

server.listen(port, host, function(){
   console.log(`Server running at http://${host}:${port}/`);
});