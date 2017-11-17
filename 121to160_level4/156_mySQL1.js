const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gosdk123',
  database: 'comicbook',
  port: '3306',
});

connection.connect();
connection.query('SELECT * from books', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});
connection.end();

