// mysql 모듈 사용
const mysql = require('mysql');

// 연결할 DB 정보입력
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gosdk123',
  database: 'comicbook',
  port: '3306',
});

// 데이터베이스 연결
connection.connect();

// Update 쿼리문 사용
connection.query('update books set genre = \'romance\', writer = \'JI\' where number = 11 and name = \'Mygiant Nerd Boyfriend\';', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

// Select 쿼리문 사용
connection.query('SELECT * from books', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

// 연결 종료
connection.end();
