//import
const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'yourRootPassword',
  //employeeSchema
  database: 'employees_DB'
});

//catches errors
connection.connect((err) => {
  if (err) throw err;
  //else
});console.log("You're successfully connected!")
//export
module.exports = connection;