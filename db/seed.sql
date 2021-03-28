-- file to pre-populate your database 
USE employees_DB;

INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("Legal");
INSERT INTO department (name) VALUES ("Sales");

INSERT INTO roles (title, salary, department_id) VALUES ("Sales Lead", 60000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Salesperson", 40000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Lead Engineer", 90000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Software Engineer", 95000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Account Manager", 55000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ("Accountant", 95000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ("Legal Team Lead", 150000, 4);
INSERT INTO roles (title, salary, department_id) VALUES ("Lawyer", 120000, 4);

-- saleslead
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Pristina", "Hugh", 1, 0);
-- salesperson
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jean", "McAllister", 1, 1);
-- lead enginner
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Kate", "Martinez", 2, 0);
-- software Engineer
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Bob", "Rivas", 2, 2);
-- Account Manager
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Elliott", "Stewart", 3, 0);
-- accountant
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jodie", "Stone", 3, 3);
-- legalteam lead
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Tom", "Foster", 4, 0);
-- lawyer
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Kristen", "James", 4, 4);