//require mysql for db
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
<<<<<<< HEAD
});console.log("You're successfully connected!")

module.exports = connection;
=======
  //else
});console.log("You are connected!")
//export
module.exports = connection;
>>>>>>> a5de6c243b73c35b566ed7ba4865687ffd0566fc
