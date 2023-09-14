const dbCon = require('./sample/sample.js');
const express = require('express');
const app = express();

// 라우터 객체 참조
const router = express.Router();

// 라우터 객체를 app 객체에 등록
app.use('/', router);

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const nunjucks = require("nunjucks")

app.set("view engine", "html")
nunjucks.configure("./sample", {
    express: app
})

const PORT = 4000;
const HOST = "127.0.0.1";

let tmp1 = ``;
let tmp2 = ``;

app.get('/', (req, res) => {
   res.render('sampleMain.html');
});

app.get('/list', (req, res) => {
   dbCon.getSampleList()
   .then((rows)=> {
      res.render('sampleList.html', {samples: rows});
      rows.map((row)=> {
      });
   })
   .catch((err)=> {console.log(err);});
});

app.get('/get/:no', (req, res) => {
   dbCon.getSample(req.params.no)
      .then((row) => {
         res.render('sampleGet.html', {samples: row});
      })
      .catch((errMsg) => {
         res.send(errMsg);
      });
});

app.get('/add', (req, res) => {
   res.render('sampleInsert.html');
});

app.post('/addPro', (req, res) => {
   dbCon.insertSample(req.body).then((row) => {
      res.redirect('/list');
   }).catch((err) => {
         res.send(err);
   });
});

app.get('/delete/:no', (req, res) => {
   dbCon.deleteSample(req.params.no)
   .then((row) => {
      res.redirect('/list');
   }).catch((err) => {
         res.send(err);
   });
});


app.get('/update/:no', (req, res) => {
   dbCon.getSample(req.params.no)
      .then((row) => {
         res.render('sampleUpdate.html', {samples: row});
      })
      .catch((errMsg) => {
         res.send(errMsg);
      });
});


app.post('/updatePro', (req, res) => {
   dbCon.updateSample(req.body)
      .then((row) => {
         res.redirect(`/get/${req.body.no}`);
      })
      .catch((errMsg) => {
         res.send(errMsg);
      });
});

app.listen(PORT, HOST, () => {
   console.log(`Server running at http://${HOST}:${PORT}/`);
   console.log(`Press Ctrl+C to quit.`);
});