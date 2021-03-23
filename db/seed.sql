-- file to pre-populate your database 
USE employees_DB;

-- department
INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("Legal");
INSERT INTO department (name) VALUES ("Sales");

-- role
INSERT INTO roles (title, salary, department_id) VALUES ("Sales Lead", 60000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Salesperson", 40000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Lead Engineer", 90000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Software Engineer", 95000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Account Manager", 55000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ("Accountant", 95000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ("Legal Team Lead", 150000, 4);
INSERT INTO roles (title, salary, department_id) VALUES ("Lawyer", 120000, 4);

-- employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Pristina", "Hugh", 1, 0);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jean", "McAllister", 2, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Kate", "Martinez", 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Bob", "Rivas", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Ellen", "Stewart", 5, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jodie", "Stone", 6, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Tom", "Foster", 7, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Kristen", "James",8, 1);