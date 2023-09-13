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

////////////////////////////////////////////////////////////////
async function getBoardList() {
   let conn, rows;
   try {
      conn = await pool.getConnection();
      rows = await conn.query("SELECT * from board");
   } catch (err) {
      throw err;
   } finally {
      if (conn) {
         conn.end();
         return rows;
      }
   }
}
module.exports.getBoardList = getBoardList;



// 백틱을 사용하여 쿼리문을 작성할 수 있다.
// `select * from board where no=${no}`
async function getBoard(no) {
   let conn, rows;
   try {
      conn = await pool.getConnection();
      rows = await conn.query("SELECT * from board where no=?", [no]);
   } catch (err) {
      throw err;
   } finally {
      if (conn) {
         conn.end();
         return rows;
      }
   }
}
module.exports.getBoard = getBoard;


async function insertBoard(board) {
   let conn, res, rows;
   try {
      conn = await pool.getConnection();
      res = await conn.query("insert into board(name) values(?)", [board.NAME]);
      if(res.affectedRows > 0) {
         rows = await conn.query("SELECT * from board order by no desc limit 1");
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
module.exports.insertBoard = insertBoard;


async function deleteBoard(no) {
   let conn, res, rows;
   try {
      conn = await pool.getConnection();
      res = await conn.query(`delete from board where no=${no}`);
   } catch (err) {
      throw err;
   } finally {
      if (conn) {
         conn.end();
         return res;
      }
   }
}
module.exports.deleteBoard = deleteBoard;


async function updateBoard(board) {
   let conn, res, rows;
   try {
      console.log(no);
      conn = await pool.getConnection();
      res = await conn.query(`update set NAME=${board.NAME} from board where no=${board.no}"`);
      rows = await conn.query(`SELECT * from board where no=${board.no}`);
   } catch (err) {
      throw err;
   } finally {
      if (conn) {
         conn.end();
         return rows;
      }
   }
}
module.exports.updateBoard = updateBoard;