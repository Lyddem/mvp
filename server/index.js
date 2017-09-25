const express = require('express');
const mysql = require('mysql');
const app = express();

const PORT = process.env.PORT || 8080;

//db config
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'library'
});

// connection.connect( err => {
//   console.log('error connecting to db', err);
// });

app.get('/', function(req, res) {
  res.send('hello from server');
});

app.listen(PORT, function(req, res) {
  console.log('Listening on Port ', PORT);
});