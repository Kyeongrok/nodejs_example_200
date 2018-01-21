// mysql 모듈 사용
const mysql = require('mysql');

// 연결할 DB 정보입력
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '패스워드',
  database: 'comicbook',
  port: '3306',
});

// 데이터베이스 연결
connection.connect();

// Insert 쿼리문 사용
connection.query('insert into books (genre, name, writer, releasedate) values (\'fantasy\', \'LUMINE\', \'Emma Krogell\', \'2015-05-15\'), (\'comedy\', \'Mygiant Nerd Boyfriend\', \'fishball\', \'2017-03-03\'), (\'romance\', \'I Love Yoo\', \'Quimchee\', \'2016-08-21\'), (\'action\', \'Tower of God\', \'SIU\', \'2017-10-01\'), (\'action\', \'Rise from Ashes\', \'Madeleine Rosca\', \'2016-01-13\');', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

// 연결 종료
connection.end();

