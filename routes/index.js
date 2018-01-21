var express = require('express');
var router = express.Router();
var mysql= require('mysql');

var connection= mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cine'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Peliculas' });
  connection.connect();
  connection.query('select * from peliculas', function(err,rows, fileds){
    if(err) throw err;
    console.log('El resultado es: ', rows[0]);
  });
 
});


module.exports = router;
