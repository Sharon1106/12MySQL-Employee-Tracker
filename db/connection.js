//require mysql
var mysql      = require('mysql');

//creates connection info,using credentials to mysql database 
var connection = mysql.createConnection({
  host     : 'localhost',
  port: '3306',
  user     : 'root',
  password : 'yourRootPassword',
  database: 'employees_DB'
});

// connect and catch errors
connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;