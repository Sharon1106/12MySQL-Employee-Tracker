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
        "View All Roles",
        //ADD
        "Add employee",
        "Add department",
        "Add role",
        //UPDATE
        "Update employee role",
        //REMOVE
        "Remove employee",
        "Remove role",
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

       case "View all roles":
            viewRoles();
            break;

            //ADD
       case "Add employee":
            addEmployee();
            break;

       case "Add department":
            addDepartment();
            break;

       case "Add role":
            addRole();
            break;

            //UPDATE
       case "Update employee role":
            updateEmployeeRole();
            break;

            //REMOVE
       case "Remove employee":
            removeEmployee();
            break;


       case "remove role":
            removeRole();
            break;

       case "Quit":
       console.log("Goodbye!");
       connection.end();
            break;
      }
  });
}

      // (if)
// viewEmployees();
function viewEmployees () {
      console.log("Viewing all employees:\n");
      // *View all employees*
      //grab and display//id/ first_name/ last_name/ role/ department/ salary/ manager/ 
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

// ?Which department would you like to see employees for?
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
                //grab and display/
            //id/ first_name/ last_name/department
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


// //NOT WORKING//
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
//addEmployee();
// *Add employee
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
  //addRole();
  function addRole() {
      inquirer
       .prompt ([
             {
                  name: 'newRole',
                  type: 'input',
                  message: "Which role do you want to add?",
             },
             {
                  name: 'roleSalary',
                  type: 'input',
                  message: "What is the yearly salary for this role?",
             },
             {
                  name: 'roleDepartment',
                  type: 'input',
                 choices: departmentChoices,
             },

             
       ])
  } 

// // message/Successfully Updated roles/message//


// (if)
// *Update Employee's role
//updateEmployee();
// ?which employees role do you want to update?
      // [choices]
// *Employee
// *Employee
// (etc)
// ?Which role do you want to assign the selected employee?
      // [choices]
// *sales lead
// *salesperson
// *lead engineer
// *Software engineer
// *account manager
// *accountant
// *legal team lead
// *lawyer
// message/Successfully Updated employees role/message//



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


                        // /EXAMPLE//
            //  SELECT column_name(s)
            // FROM table1
            // LEFT JOIN table2
            // ON table1.column_name = table2.column_name;

      // SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
      // FROM Orders
      // INNER JOIN Customers
      // ON Orders.CustomerID=Customers.CustomerID;
      // !!use mysql workbench to test sql statement before writing in javascript!!




// (if)
// quit 
// // message/Goodbye!/message//