//require mysql for db
const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'yourRootPassword',
  //employeesSchema
  database: 'employees_DB'
});

//catches errors
connection.connect((err) => {
  if (err) throw err;
});
module.exports = connection;