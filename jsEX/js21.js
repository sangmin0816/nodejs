const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const PORT = 4000;
const HOST = "127.0.0.1";

app.get("/", (req, res) => {
   // 스프링으로 따지면 request.mapping과 같다.
   res.send("Hello Express World!");
   res.end();
});

server.listen(PORT, HOST, () => {
   console.log(`Server running at http://${HOST}:${PORT}/`);
   console.log("Press Ctrl+C to quit.");
});