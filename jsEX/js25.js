const dbCon = require('./mariaDBCon');
const express = require('express');
const app = express();

dbCon.getSampleList()
.then((rows)=> {
   console.log("GET SAMPLE LIST");
   rows.map((row)=> {
      console.log(`no: ${row.no} name: ${row.NAME}`);
   });
   console.log("----------------------------------------------------------------");
}
).catch((err)=> {console.log(err);}
);



dbCon.getSample(2)
.then((rows)=> {
   console.log("GET SAMPLE");
   rows.map((row)=> {
      console.log(`no: ${row.no} name: ${row.NAME}`);
   });
   console.log("----------------------------------------------------------------");
})
.catch((err)=> {console.log(err);});


dbCon.insertSample({NAME: "test"})
.then((rows)=> {
   console.log("INSERT SAMPLE");
   rows.map((row)=> {
      console.log(`no: ${row.no} name: ${row.NAME}`);
   });
   console.log("----------------------------------------------------------------");
})
.catch((err)=> {console.log(err);});

dbCon.deleteSample(8)
.then((res)=> {
     console.log("DELETE SAMPLE");
     console.log(res);
})
.catch((err)=> {console.log(err);});

const PORT = 4000;
const HOST = "127.0.0.1";
app.listen(PORT, HOST, () => {
   console.log(`Server running at http://${HOST}:${PORT}/`);
   console.log(`Press Ctrl+C to quit.`);
});