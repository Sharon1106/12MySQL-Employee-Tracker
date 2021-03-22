// export to use elsewhere
module.exports = {
  //initial prompt
  firstPrompt: {
    name: 'start',
    type: "list",
    message: "What would you like to do?",
    choices:[
      "View all employees",
      "View all employees by department",
      "View all employees by manager",
      "Add employee",
      "Remove employee",
      "Update employee role",
      "Update employee manager",
      "View all roles",
      "Add role",
      "remove role",
      "Quit"
    ]
    
  }
};