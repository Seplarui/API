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
  //res.render('index', { title: 'Peliculas' });
  
  connection.query('select * from peliculas', function(err,rows, fields){
    if(err) throw err;
    console.log('El resultado es: ', rows[0].Titulo);
    res.json(rows[0]);
 
  connection.query('select * from peliculas', function(err,rows, fields){
    if(err) throw err;
    console.log('El resultado es: ', rows[0]);
    res.json(rows);
  });
 
});


module.exports = router;
