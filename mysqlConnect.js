var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.50.25',
  user     : 'root',
  password : 'q1w2e3r4',
  database : 'kisafintech'
}); // mysql 설치 실패하신분들

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'q1w2e3r4',
    database : 'kisafintech'
});
  

connection.connect();

connection.query('SELECT * FROM user', function (error, results, fields) {
  if (error) throw error;
    console.log(results);
});
 
connection.end();
