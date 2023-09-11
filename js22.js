const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const PORT = 4000;
const HOST = "127.0.0.1";

function templateHTML(title, content){ return `<!doctype html>
<html>
<head>
      <title>${title}</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      <meta charset="utf-8">
</head>
<body>
<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
   <div class="navbar-brand">
      <a class="navbar-item">
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
      </a>
   </div>
   <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
         <a class="navbar-item" href="/">HOME</a>
         <a class="navbar-item" href="/about">About</a>
         <a class="navbar-item" href="/contact">Contact</a>
      </div>
   </div>
</nav>
   
<div class="content container">
   <div class="content is-normal">
      ${content}
   </div>
</div>
</body>

</html>`;}

app.get("/", (req, res) => {
   // 스프링으로 따지면 request.mapping과 같다.
   res.send(templateHTML("Home", "<h2>Home</h2>"));
   res.end();
});

app.get("/about", (req, res) => {
   res.send(templateHTML("About", "<h2>About</h2>"));
   res.end();
});

app.get("/contact", (req, res) => {
   res.send(templateHTML("Contact", "<h2>Contact</h2>"));
   res.end();
});

server.listen(PORT, HOST, () => {
   console.log(`Server running at http://${HOST}:${PORT}/`);
   console.log("Press Ctrl+C to quit.");
});