const http = require("http");
const url = require("url");
const qs = require("querystring");
const fs = require("fs");
const path = require("path");
 
function templateHTML(title, list, body){
  return `
  <!doctype html>
  <html>
  <head>
      <title>WEB1 - ${title}</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      <meta charset="utf-8">
  </head>
  <body>
  <div class="container">
   <div class="content is-normal">
         <h1><a href="/">WEB</a></h1>
         ${body}
         ${list}
      </div>
   </div>
  </body>
  </html>
  `;
}
function templateList(filelist){
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list+'</ul>';
  return list;
}
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = templateList(filelist);
          var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p><a class="button is-primary" href="/create">create</a>`);
          response.writeHead(200);
          response.end(template);
        });
      } else {
         fs.readdir('./data', function(error, filelist){
            fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
               var title = queryData.id;
               var list = templateList(filelist);
               var template = templateHTML(title, list,
               `<h2>${title}</h2>
                  <p>${description}</p>
                  <a class="button is-primary" href="/create">create</a>
                  <a class="button is-info" href="/update?id=${title}">update</a>
                  <a class="button is-danger" href="/delete?id=${title}">delete</a>
               `
               );
               response.writeHead(200);
               response.end(template);
            });
         });
         }
    } else if(pathname === '/create'){
      fs.readdir('./data', function(error, filelist){
        var title = 'WEB - create';
        var list = templateList(filelist);
        var template = templateHTML(title, list, `
          <form action="http://localhost:3000/create_process" method="post">
            <p><input class="input is-primary" type="text" name="title" placeholder="title"></p>
            <p>
              <textarea class="textarea" name="description" placeholder="description"></textarea>
            </p>
            <p>
              <input class="button is-primary" type="submit">
            </p>
          </form>
        `);
        response.writeHead(200);
        response.end(template);
      });
    } else if(pathname === '/create_process'){
      var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          var title = post.title;
          var description = post.description;
          fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {'Content-Type': 'text/html; charset=utf-8', Location: `/`});
            response.end();
          })
      });
    } else if(pathname === '/update'){
      fs.readdir('./data', function(error, filelist){
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
          var title = queryData.id;
          var list = templateList(filelist);
          var template = templateHTML(title, list,
            `
            <form action="/update_process" method="post">
              <input type="hidden" name="id" value="${title}">
              <p><input class="input is-primary" type="text" name="title" placeholder="title" value="${title}"></p>
              <p>
                <textarea class="textarea" name="description" placeholder="description">${description}</textarea>
              </p>
              <p>
                <input class="button is-primary" type="submit">
              </p>
            </form>
            `
          );
          response.writeHead(200);
          response.end(template);
        });
      });
    } else if(pathname === '/update_process'){
      var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          var id = post.id;
          var title = post.title;
          var enTitle = encodeURI(title);
          var description = post.description;
          fs.rename(`data/${id}`, `data/${title}`, function(error){
            fs.writeFile(`data/${title}`, description, 'utf8', function(err){
              response.writeHead(302, {'Content-Type': 'text/html; charset=utf-8', Location:`/?id=${enTitle}`});
              response.end();
            })
          });
      });
    } else if(pathname === '/delete'){
      fs.unlink(`data/${queryData.id}`, function(error){
         response.writeHead(302, {'Content-Type': 'text/html; charset=utf-8', Location: `/`});
         response.end();
      })
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});

app.listen(3000);