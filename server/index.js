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

  var query = `INSERT INTO words (word) VALUES ("${req.body.data}")`
  connection.query(query, function(err, result) {
    if(err){
      console.log(err)
    } else {
      res.end(req.body.data);
    }
  })

  console.log('REQ BODY', req.body.data);
  res.send(req.body.data) //send back the request
});

app.get('/getLastWord', function(req, res){
  var query = `SELECT word FROM words WHERE id = (SELECT MAX(id) from words)`;
  // var query = `SELECT * FROM  words`;
  connection.query(query, function(err, result) {
    if(err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})

app.get('/', function(req, res) {
  // res.send('server');
});

app.listen(PORT, function(req, res) {
  console.log('Listening on Port ', PORT);
});
