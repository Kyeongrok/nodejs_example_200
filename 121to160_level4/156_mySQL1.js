const mysql = require('mysql');

const client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gosdk123',
  debug: 'true',
  port: '3306',
});

client.query('use comicbook');
client.query('select * from books', (err, result, fields) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

