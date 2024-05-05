-- Drop the database if it exists
DROP DATABASE IF EXISTS employees;
create DATABASE employees;

-- Connect to the database
\c employees

-- TODO- write an SQL command to Create the department table
CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name VARCHAR(225) UNIQUE NOT NULL
);

-- TODO- write an SQL command to Create the role table
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(225) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL ,
    department_id INTEGER NOT NULL
);

-- TODO- write an SQL command to Create the employee table

CREATE TABLE employee (
 id SERIAL PRIMARY KEY,
 first_name VARCHAR(225) NOT NULL,
 last_name VARCHAR(225) NOT NULL,
 role_id INTEGER NOT NULL,
 manager_id INTEGER
);
