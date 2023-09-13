const dbCon = require('./db/mariadb');
const express = require('express');
const app = express();

// 라우터 객체 참조
const router = express.Router();

// 라우터 객체를 app 객체에 등록
app.use('/', router);

const cors = require('cors');
const corsOptions ={
   origin:'http://localhost:4000', 
   credentials:true,
   optionSuccessStatus:200
}

app.use(cors(corsOptions));

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs")
app.set('views','./views');

const PORT = 4000;
const HOST = "127.0.0.1";

app.get('/', (req, res) => {
   res.render('index');
});

app.get('/sample/list', (req, res) => {
   dbCon.getSampleList()
   .then((rows)=> {
      res.render('sample/sampleList', {samples: rows});
   })
   .catch((err)=> {console.log(err);});
});

app.get('/sample/get/:no', (req, res) => {
   dbCon.getSample(req.params.no)
      .then((row) => {
         res.render('sample/sampleGet', {samples: row});
      })
      .catch((errMsg) => {
         res.send(errMsg);
      });
});

app.get('/sample/add', (req, res) => {
   res.render('sample/sampleInsert');
});

app.post('/sample/addPro', (req, res) => {
   dbCon.insertSample(req.body).then((row) => {
      res.redirect('/sample/list');
   }).catch((err) => {
         res.send(err);
   });
});

app.get('/sample/delete/:no', (req, res) => {
   dbCon.deleteSample(req.params.no)
   .then((row) => {
      res.redirect('/sample/list');
   }).catch((err) => {
         res.send(err);
   });
});


app.get('/sample/update/:no', (req, res) => {
   dbCon.getSample(req.params.no)
      .then((row) => {
         res.render('sample/sampleUpdate', {samples: row});
      })
      .catch((errMsg) => {
         res.send(errMsg);
      });
});


app.post('/sample/updatePro', (req, res) => {
   dbCon.updateSample(req.body)
      .then((row) => {
         res.redirect(`/sample/get/${req.body.no}`);
      })
      .catch((errMsg) => {
         res.send(errMsg);
      });
});

// ///////////////////////////
app.get('/board/list', (req, res) => {
   res.render('board/boardList');
});

app.post('/board/list', (req, res) => {
   dbCon.getBoardList()
   .then((rows)=> {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.json({boards: rows});
      // res.send({boards: rows});
   })
   .catch((err)=> {console.log(err);});
});

app.get('/board/get/:no', (req, res) => {
   dbCon.getBoard(req.params.no)
      .then((row) => {
         res.render('board/boardGet', {boards: row});
      })
      .catch((errMsg) => {
         res.send(errMsg);
      });
});

app.get('/board/add', (req, res) => {
   res.render('board/boardInsert');
});

app.post('/board/addPro', (req, res) => {
   dbCon.insertBoard(req.body).then((row) => {
      res.redirect('/board/list');
   }).catch((err) => {
         res.send(err);
   });
});

app.get('/board/delete/:no', (req, res) => {
   dbCon.deleteBoard(req.params.no)
   .then((row) => {
      res.redirect('/board/list');
   }).catch((err) => {
         res.send(err);
   });
});


app.get('/board/update/:no', (req, res) => {
   dbCon.getBoard(req.params.no)
      .then((row) => {
         res.render('board/boardUpdate', {boards: row});
      })
      .catch((errMsg) => {
         res.send(errMsg);
      });
});


app.post('/board/updatePro', (req, res) => {
   dbCon.updateBoard(req.body)
      .then((row) => {
         res.redirect(`/board/get/${req.body.no}`);
      })
      .catch((errMsg) => {
         res.send(errMsg);
      });
});

app.listen(PORT, HOST, () => {
   console.log(`Server running at http://${HOST}:${PORT}/`);
   console.log(`Press Ctrl+C to quit.`);
});