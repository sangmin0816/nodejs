const mariadb = require('mariadb');
const config = require('./mariadb.config.js');

const pool = mariadb.createPool({
   host: config.host,
   port: config.port,
   user: config.user,
   password: config.password,
   database: config.database,
   connectionLimit: config.connectionLimit,
});

async function getSampleList() {
   let conn, rows;
   try {
      conn = await pool.getConnection();
      rows = await conn.query("SELECT * from sample");
   } catch (err) {
      throw err;
   } finally {
      if (conn) {
         conn.end();
         return rows;
      }
   }
}
module.exports.getSampleList = getSampleList;



// 백틱을 사용하여 쿼리문을 작성할 수 있다.
// `select * from sample where no=${no}`
async function getSample(no) {
   let conn, rows;
   try {
      conn = await pool.getConnection();
      rows = await conn.query("SELECT * from sample where no=?", [no]);
   } catch (err) {
      throw err;
   } finally {
      if (conn) {
         conn.end();
         return rows;
      }
   }
}
module.exports.getSample = getSample;


async function insertSample(sample) {
   let conn, res, rows;
   try {
      conn = await pool.getConnection();
      res = await conn.query("insert into sample(name) values(?)", [sample.NAME]);
      if(res.affectedRows > 0) {
         rows = await conn.query("SELECT * from sample order by no desc limit 1");
      }
   } catch (err) {
      throw err;
   } finally {
      if (conn) {
         conn.end();
         return rows;
      }
   }
}
module.exports.insertSample = insertSample;


async function deleteSample(no) {
   let conn, res, rows;
   try {
      conn = await pool.getConnection();
      res = await conn.query(`delete from sample where no=${no}`);
   } catch (err) {
      throw err;
   } finally {
      if (conn) {
         conn.end();
         return res;
      }
   }
}
module.exports.deleteSample = deleteSample;


async function updateSample(sample) {
   let conn, res, rows;
   try {
      console.log(no);
      conn = await pool.getConnection();
      res = await conn.query(`update set NAME=${sample.NAME} from sample where no=${sample.no}"`);
      rows = await conn.query(`SELECT * from sample where no=${sample.no}`);
   } catch (err) {
      throw err;
   } finally {
      if (conn) {
         conn.end();
         return rows;
      }
   }
}
module.exports.updateSample = updateSample;


async function editSample(sample){
   let conn, msg, sql;
   try {
      conn = await pool.getConnection();
      sql = "update sample set name=? where no=?";
      await conn.query(sql, sample);
      msg="수정 성공";
   } catch (error) {
      msg="수정 실패";
      throw error;
   } finally{
      if (conn) conn.end();
      return msg;
   }
}