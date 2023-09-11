const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const PORT = 4000;
const HOST = "127.0.0.1";

app.get("/", (req, res) => {
   // 스프링으로 따지면 request.mapping과 같다.
   res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
   res.sendFile(__dirname + "/about.html");
});

app.get("/contact", (req, res) => {
   res.sendFile(__dirname + "/contact.html");
});

server.listen(PORT, HOST, () => {
   console.log(`Server running at http://${HOST}:${PORT}/`);
   console.log("Press Ctrl+C to quit.");
});