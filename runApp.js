//dependancies required to start running app
const connection = require('./db/connection');
const questions = require('./db/questions');
const inquirer = require('inquirer');

//NOT SURE HOW TO USE...
// const table = require('console.table');


// --------------------------------------------------------
// 3 different tables department/ role/ employee/DONE
//inquirer for questions/IN PROGRESS/
// use join to retrive information from javasript and database 
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


// Inquirer Prompts//
// ?What would you like to do?
      // [choices]
// *View all employees
// *View all employees by department
// *View all employees by manager
// *Add employee
// *Remove employee
// *Update employee role
// *Update employee manager
// *View all roles
// *Add role 
// *remove role 
// *Quit 

// (if)
// *View all employees*
//grab and display/ 
//id/ first_name/ last_name/ role/ department/ salary/ manager/ 

// (if)
// *View all employees by department*
// ?Which department would you like to see employees for?
      // [choices]
// *Engineering
// *Finance
// *Legal
// *Sales
//grab and diplay/
//id/ first_name/ last_name/role/ department

// (if)
// *View all employees by manager*
// ?Which employee do you want to see direct reports for?
      // [choices]
// *manager 
// *manager
// *manager
// (etc)
//grab and display/
//id/ first_name/ last_name/role/ manager/ 
// (if)
// no employee exists...
//message/ the selected employee has no direct reports/message//

// (if)
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
// *View all roles*
// ?Which role do you want to see direct reports for?
      // [choices]
// *sales lead
// *salesperson
// *lead engineer
// *Software engineer
// *account manager
// *accountant
// *legal team lead
// *lawyer
//grab and display/
//id/ first_name/ last_name/ role/ department/ salary/ manager/

// (if)
// *Add role 
// // ?Which role do you want to add?
      // [input]
// ?What is the yearly salary for this role?
      // [input]
// ?What department is this new role under?
      // [input]
// // message/Successfully Updated roles/message//


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
