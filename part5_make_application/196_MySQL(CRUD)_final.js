// CRUD에 필요한 모듈 사용
const mysql = require('mysql');
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser');

// 연결할 DB 정보입력
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '패스워드',
  database: 'comicbook',
  port: '3306',
});

const app = express();
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.listen(3000, () => {
  console.log('Server is running port 3000!');
  // 데이터베이스 연결
  connection.connect();
});

// 데이터 조회
app.get('/', (request, response) => {
  fs.readFile('bookList.html', 'utf-8', (error, data) => {
    // Select 쿼리문 사용
    connection.query('SELECT * from books', (error, results, fields) => {
      if (error) throw error;
      response.send(ejs.render(data, {
        data: results,
      }));
    });
  });
});

// 데이터 추가
app.get('/create', (request, response) => {
  fs.readFile('insertNewBook.html', 'utf-8', (error, data) => {
    if (error) throw error;
    response.send(data);
  });
});

// 데이터 추가
app.post('/create', (request, response) => {
  const body = request.body;
  connection.query('INSERT INTO books (genre, name, writer, releasedate) VALUE (?, ?, ?, ?)',
    [body.genre, body.name, body.writer, body.releasedate], () => {
      // 조회 페이지로 이동
      response.redirect('/');
    });
});

// 데이터 수정
app.get('/modify/:id', (request, response) => {
  // 파일을 읽어옵니다.
  fs.readFile('modify.html', 'utf-8', (error, data) => {
    connection.query('SELECT * from books WHERE number =?', [request.params.id], (error, results) => {
      if (error) throw error;
      console.log(request.params.id);
      response.send(ejs.render(data, {
        data: results[0],
      }));
    });
  });
});

app.post('/modify/:id', (request, response) => {
  const body = request.body;
  connection.query('UPDATE books SET genre = ?, name = ?, writer = ? WHERE number = ?',
    [body.genre, body.name, body.writer, request.params.id], (error, results) => {
      if (error) throw error;
      // 조회페이지로 이동
      response.redirect('/');
    });
});

// 데이터 삭제
app.get('/delete/:id', (request, response) => {
  connection.query('DELETE FROM books where number=?', [request.params.id], () => {
    // 조회 페이지로 이동
    response.redirect('/');
  });
});
