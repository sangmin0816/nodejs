const http = require("http");
const express = require("express");
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app);
const PORT = 4000;
const HOST = "127.0.0.1";

let users = [
   {id: 'kim', pw: '1234'},
   {id: 'kim2', pw: '1234'},
   {id: 'kim3', pw: '1234'},
]; // 객체 배열

function findUserIndex(id) {
   for(var i=0; i<users.length; i++) {
      if(id == users[i].id){
         return i;
      }
   }
   return -1;
}

function login(id, pw){
   let index = findUserIndex(id);
   if(index!==-1){
      if(pw === users[index].pw){
         return true;
      }
   }
   return false;
}

function register(id, pw) {
   let index = findUserIndex(id);
   if(index===-1){
      users.push({id: id, pw: pw});
      return true;
   }
   return false;
}

function changePw(id, pw) {
   let index = findUserIndex(id);
   if(index!==-1){
      users[index].pw = pw;
      return true;
   }
   return false;
}

function deleteUser(id){
   let index = findUserIndex(id);
   if(index!==-1){
      users.splice(index, 1);
      // .splice(beginIndex, count);
      return true;
   }
   return false;
}

app.post("/", (req, res) => {   //폼 전송(body)
   let id = req.body.id;
   let pw = req.body.pw;
   if(!register(id, pw)) return res.status(401).send("중복된 아이디 입니다.");
   res.send("회원 가입을 축하합니다.");
});

//정보 조회(selectOne)
app.get("/:id", (req, res) => { //GET => param
   let id = req.params.id
   if(findUserIndex(id) === -1) return res.status(401).send("해당 회원이 존재하지 않습니다.");
   res.send(`안녕하세요 ${id}님~!`);
});

//정보 변경(Update)
app.put("/:id",(req, res) => {
   let id = req.params.id;
   let pw = req.body.pw;
   if(!changePw(id, pw)) return res.status(401).send("비밀번호 변경 실패");
   res.send(`${id}님의 비밀번호가 성공적으로 변경되었습니다.`);
});

//회원 탈퇴(delete)
app.delete("/:id", (req, res) => {
   let id = req.params.id;
   if(!deleteUser(id)) return resw.status(401).send("회원 탈퇴 실패");
   res.send("회원 탈퇴 성공");
});
//
app.post("/login", (req, res) => {
   let id = req.body.id;
   let pw = req.body.pw;
   if(!login(id, pw)) return res.status(401).send("로그인 실패");
   res.send(`${id}님 로그인 성공`);
});


server.listen(PORT, HOST, () => {
   console.log(`Server running at http://${HOST}:${PORT}/`);
   console.log("Press Ctrl+C to quit.");
});