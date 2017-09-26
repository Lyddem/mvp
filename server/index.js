const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));
bodyParser.urlencoded({extended: true });

//database connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'library'
});

app.post('/submitText', function(req, res) {
  console.log('REQ BODY', req.body.data);
  res.send(req.body)
});

app.get('/', function(req, res) {
  // res.send('server');
});

app.listen(PORT, function(req, res) {
  console.log('Listening on Port ', PORT);
});
