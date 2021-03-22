const connection = require('./db/connection');
const questions = require('./db/questions');
const inquirer = require('inquirer');
//NOT SURE HOW TO USE...
const table = require('console.table');
// const { startPrompt } = require('./db/questions');

console.log("Hello, welcome to your employee tracker! Please choose one of the options below to begin.");

//When ran 
startPrompt();

function startPrompt() {
      //when start prompt is ran run inquirer then start
      inquirer.prompt(prompt.startPrompt).then(function ({ start }) {
            // switch statement to select one of many code blocks to be executed.
      switch (start) {
            // when view all employees 
            case "View all employees":
                  viewEmployees();
              break;

            case "View all employees by department":
                  viewDepartmentE();
              break;

            case "View all employees by manager":
                  viewManagerE();
              break;
              
            case "Add employee":
                  addEmployee();
              break;

            case "Remove employee":
                  removeEmployee();
              break;

            case "Update employee role":
                  updateEmployeeRole();
              break;

            case "Update employee manager":
                  updateEmployeeManager();
              break;

            case "View all roles":
                  viewRoles();
              break;

            case "Add role":
                  addRole();
              break;

            case "remove role":
                  removeRole();
              break;

            case "Quit":
                 console.log("Goodbye!");
                 //end node app/ how?
            break;
          }
      });
}

// --------------------------------------------------------
// 3 different tables department/ role/ employee/DONE
//inquirer for questions/IN PROGRESS/
// use join to retrive information from javasript and database 
                        // /EXAMPLE//
// SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
// FROM Orders
// INNER JOIN Customers
// ON Orders.CustomerID=Customers.CustomerID;
//get values 
//Mysql 
//run myql statements 
// !!use mysql workbench to test sql statement before writing in javascript!!
//1st//
//Create 
// add department, roles, employees 
//2nd//
// Read/
// department, roles, employees 
//3rd//
//Update/
//department, roles, employees
//4st//
//Delete (optional)/

// (if)
// viewEmployees();
// *View all employees*
//grab and display/ 
//id/ first_name/ last_name/ role/ department/ salary/ manager/ 

// (if)
 //viewDepartmentE();
// *View all employees by department*
// ?Which department would you like to see employees for?
      // [choices]
// *Engineering
// *Finance
// *Legal
// *Sales
//grab and diplay/
//id/ first_name/ last_name/department

// (if)
 //viewManagerE();
// *View all employees by manager*
// ?Which employee do you want to see direct reports for?
      // [choices]
// *manager 
// *manager
// *manager
// (etc)
//grab and display/
//id/ first_name/ last_name/ manager/ 
// (if)
// no employee exists...
//message/ the selected employee has no direct reports/message//

// (if)
//addEmployee();
// *Add employee
// ?What is the employees first name?
      // [input]
// ?what is the employees last name?
      // [input]
// ?What is the employees role?
      // [choices]
// *sales lead
// *salesperson
// *lead engineer
// *Software engineer
// *account manager
// *accountant
// *legal team lead
// *lawyer
//when chosen
// ?Who is the employees manager?
      // [choices]
// *manager 
// *manager
// *manager
// (etc)
//message/ succesfully added (First name) (last name) to the database/message//

// (if)
//removeEmployee();
// *remove employee
// ?What is the employees first name?
      // [input]
// ?what is the employees last name?
      // [input]
// ?What is the employees role?
      // [choices]
// *sales lead
// *salesperson
// *lead engineer
// *Software engineer
// *account manager
// *accountant
// *legal team lead
// *lawyer
//when chosen
// ?Who is the employees manager?
      // [choices]
// *manager 
// *manager
// *manager
// (etc)
//message/ succesfully removed (First name) (last name) to the database/message//



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
 //updateManager();
// *Update employee manager
// ?which employees manager do you want to update?
      // [choices]
// *Employee
// *Employee
// (etc)
// ?Which manager do you want to assign the selected employee?
      // [choices]
// *Manager 
// *manager 
// *etc
// // message/Successfully Updated employees manager/message//

// (if)
 //viewRoles();
// *View all roles*
//grab and display
//id/ role

// (if)
  //addRole();
// *Add role 
// // ?Which role do you want to add?
      // [input]
// ?What is the yearly salary for this role?
      // [input]
// ?What department is this new role under?
      // [input]
// // message/Successfully Updated roles/message//

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

// (if)
// quit 
// // message/Goodbye!/message//