const connection = require('./db/connection');
const table = require('console.table');
const inquirer = require('inquirer');

startPrompt();

console.log("Hello, welcome to your employee tracker! Please choose one of the options below to begin.");

function startPrompt() {
   inquirer 
   .prompt ([
    {
      name: 'start',
      type: "list",
      message: "What would you like to do?",
      choices:[ 
        //VIEW    
        "View all employees",
        "View all employees by department",
      //   "View All Roles",
        //ADD
        "Add employee",
        "Add department",
      //   "Add role",
        //UPDATE
        "Update employee role",
        //REMOVE
        "Remove employee",
      //   "Remove role",
        "Quit"
      ]  
    } 
  ])
  .then ((res) => {
      // switch statement to select one of many code blocks to be executed.
      switch (res.start) {
      // VIEW
       case "View all employees":
            viewEmployees();
            break;

       case "View all employees by department":
            viewDepartmentE();
            break;

      //  case "View all roles":
      //       viewRoles();
      //       break;

            //ADD
       case "Add employee":
            addEmployee();
            break;

       case "Add department":
            addDepartment();
            break;

      //  case "Add role":
      //       addRole();
      //       break;

            //UPDATE
       case "Update employee role":
            updateEmployeeRole();
            break;

            //REMOVE
       case "Remove employee":
            removeEmployee();
            break;

      //  case "remove role":
      //       removeRole();
      //       break;

       case "Quit":
       console.log("----------Goodbye!");
       connection.end();
            break;
      }
  });
}

      // (if)
// viewEmployees();
function viewEmployees () {
      console.log("Viewing all employees:\n");
      var query = `
      SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
      FROM employee e
      LEFT JOIN roles r
      ON e.role_id = r.id
      LEFT JOIN department d
      ON d.id = r.department_id
      LEFT JOIN employee m
      ON m.id = e.manager_id`

      connection.query(query, (err, res) => {
            if (err) throw err;
            console.table(res);
            console.log("\n-------------------Viewed-All-Employees--------------------------------");
            startPrompt();
      });
}

      // (if)
 //viewDepartmentE();
function viewDepartmentE() {
      var query = `
      SELECT * FROM department`;

      connection.query(query, (err, res) => {
            if (err) throw err;

            const departmentChoices = res.map(data => ({
             value: data.id,
             name: data.name
            }));

            console.table(res);
            console.log("\n------------------View-By-Department---------------------------------");
            
            departmentPrompt(departmentChoices);
      });
}
function departmentPrompt(departmentChoices) {
    inquirer 
      .prompt ([
       {
         name: 'departmentId',
         type: "list",
         message: "Which department would you like to see employees for?",
         choices: departmentChoices
       } 
     ])
     .then ((answer) => {
            console.log(answer.departmentId);
            var query = `
            SELECT e.id, e.first_name, e.last_name, d.name AS department 
            FROM employee e
            LEFT JOIN roles r
            ON e.role_id = r.id
            LEFT JOIN department d
            ON d.id = r.department_id
            WHERE d.id = ?`;
            
            connection.query(query, answer.departmentId, (err, res) => {
            if (err) throw err;
                              
             console.table("Department employees", res);
             console.log("\n-------------------Viewed-All-Employees-By-Department------------------------------");

             startPrompt();
            });

     });
}

// (if)
//addEmployee();
function addEmployee() {
      var query = ` SELECT r.id, r.title, r.salary
      FROM roles r`

      connection.query(query, (err, res) => {
            if (err) throw err;

            const employeeRoleChoices = res.map(({id, title, salary}) => ({
             value: id, 
             title:`${title}`, 
             salary: `${salary}`
            }));

            console.table(res);
            console.log("\n------------------Add-New-Employee------------------------------");
            
            addEmployeePrompt(employeeRoleChoices);
      });
}
function addEmployeePrompt (employeeRoleChoices) {
      inquirer 
        .prompt ([
         {
           name: 'first_name',
           type: 'input',
           message: "What is the employees first name?",
         },
         {
            name: 'last_name',
            type: 'input',
            message: "what is the employees last name?",
          },
          {
            name: 'role_id',
            type: "list",
            message: "What is the employees role?",
            choices: employeeRoleChoices
          },
          
       ])

       .then ((answer) => {
              console.log(answer);
  
              var query = `INSERT INTO employee SET ?`
              
              connection.query(query, 
                  {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: answer.role_id,
                  },
                  (err, res) => {
                   if (err) throw (err);

                   console.table(res);
                   console.log(res.insertedRows + "\n-------------------Added-New-Employee!------------------------------");
                   viewEmployees();
                  }                                      
            );
       });
}

function addDepartment() {
      inquirer 
        .prompt ([
         {
           name: 'newDepartment',
           type: 'input',
           message: "What is the new Departments title?",
         },
       ])

       .then ((answer) => {
            var query = ` INSERT INTO department SET ?`
              connection.query(query, 
                  {
                        name: answer.newDepartment
                  },
                  (err, res) => {
                   if (err) throw (err);
                   console.table(res);
                   console.log("-------------------Added-New-Department!------------------------------");
                   startPrompt();
                  }                                      
            );
       });
}

// (if)
//removeEmployee();
function removeEmployee() {
      var query = `SELECT e.id, e.first_name, e.last_name 
      FROM employee e`

      connection.query(query, (err, res) => {
             if (err) throw err;
                      
            const removeEmployeeChoices = res.map(({ id, first_name, last_name }) => ({
                  value: id, name: `${id} ${first_name} ${last_name}`
            }));
            console.table(res);
            console.log("Choices");

            removeEmployeePrompt(removeEmployeeChoices);

      });
}
function removeEmployeePrompt (removeEmployeeChoices) {
       inquirer 
        .prompt ([
         {
           name: 'employeeId',
           type: 'list',
           message: "Which employee do you want to remove?",
           choices: removeEmployeeChoices
         }
       ])

       .then ((answer) => {
              console.log(answer);
  
              var query = `DELETE FROM employee WHERE ?`
              
              connection.query(query, {id: answer.employeeId}, (err, res) => {
            if (err)throw (err);

            console.table(res);
            console.log(res.insertedRows + "\n-------------------Removed-Employee-----------------------------");
                  startPrompt();
            }                                                  
            );
       });
}


// //FUTURE DEVELOPMENT//
// // (if)
// //  viewRoles();
// function viewRoles() {
//       console.log("Viewing all roles:\n");
//       // *View all roles*
//       //id/ role
//       var query = `SELECT * FROM roles`;

//       connection.query(query, (err, res) => {
//             if (err) throw err;
//             console.table(res);
//             console.log("\n-------------------Viewed-All-Roles-------------------------------");
//             res.forEach((role) => {
//                   console.log(
//                         `ID: ${role.id} | Title: ${role.title}\n Salary: ${role.salary}\n`,
//                   );
//             });
//             startPrompt();
//       });
// }
// (if)
// //   //addRole();
// function addRole() {
//       var query = 
//       `SELECT d.id, d.name, r.salary AS budget
//       FROM employee e
//       JOIN roles r
//       ON e.role_id = r.id
//       JOIN department d
//       ON d.id = r.department_id
//       GROUP BY d.id, d.name`;
// }
//       connection.query(query, (err, res) => {
//        if (err) throw (err);
//        const employeeDepartmentChoices = res.map(({id, name }) => ({
//             value: id, 
//             name:`${id} ${name}`, 
            
//       }));

//        console.table(res);
//        console.log("-------------------Added-New-Role!------------------------------");
//        promptAddRole(employeeDepartmentChoices)
//       }                                      
// );


//   function promptAddRole () {
//       inquirer
//        .prompt ([
//              {
//                   name: 'newRole',
//                   type: 'input',
//                   message: "Which role do you want to add?",
//              },
//              {
//                   name: 'roleSalary',
//                   type: 'input',
//                   message: "What is the yearly salary for this role?",
//              },
//              {
//                   name: 'roleDepartment',
//                   type: 'list',
//                  choices: employeeDepartmentChoices,
//              },
//        ])
//        .then ((answer) => {
//             var query = ` INSERT INTO roles SET ?`
//               connection.query(query, 
//                   {
//                         title: answer.newRole,
//                         salary: answer.roleSalary,
//                         department: answer.roleDepartment
//                   },
//                   (err, res) => {
//                    if (err) throw (err);
//                    console.table(res);
//                    console.log("-------------------Added-New-Role!------------------------------");
//                    startPrompt();
//                   }                                      
//             );
//        });
//   } 

// (if)
// // *Update Employee's role
// function updateEmployee() {
//       inquirer 
//             .prompt ([
//                   {
//                         name: 'role',
//                         type: 'input',
//                         message: "which employees role do you want to update?",
//                   },
//                   {
//                          name: 'last_name',
//                          type: 'input',
//                          message: "what is the employees last name?",
//                   },
//                   {
//                          name: 'role_id',
//                          type: "list",
//                          message: "What is the employees role?",
//                          choices: employeeRoleChoices
//                   },
//             ])
// }

// (if)
 //removeRole();
// ?Which role do you want to remove (warning: this will also remove employees)?
      // [choices]
// *sales lead
// *salesperson
// *lead engineer
// *Software engineer
// *account manager
// *accountant
// *legal team lead
// *lawyer
// etc
// // message/Successfully deleted role/message//
