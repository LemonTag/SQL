const pool = require("./connection");

class DB {
  constructor() {}

  async query(sql, args = []) {
    const client = await pool.connect();
    try {
      const result = await client.query(sql, args);
      return result;
    } finally {
      client.release();
    }
  }

  // TODO- Create a query to Find all employees, join with roles and departments to display their roles, salaries, departments, and managers
  getAllEmployees() {
    return this.query("SELECT * FROM employee");
  }

  // TODO- Create a query to Find all employees except the given employee id
  getupdateEmployeRole() {
    return this.query("SELECT * FROM employee WHERE id !=$1;");
  }

  // TODO- Create a query to Create a new employee

  // BONUS- Create a query to Remove an employee with the given id

  // TODO- Create a query to Update the given employee's role
  getAllRoles() {
    return this.query("SELECT * FROM roles");
  }
  // BONUS- Create a query to Update the given employee's manager

  // TODO- Create a query to Find all roles, join with departments to display the department name

  // TODO- Create a query to Create a new role

  // BONUS- Create a query to Remove a role from the db

  // TODO- Create a query to Find all departments

  // BONUS- Create a query to Find all departments, join with employees and roles and sum up utilized department budget

  // TODO- Create a query to Create a new department
  getAlldepartments() {
    return this.query("SELECT * FROM departments");
  }
  // BONUS- Create a query to Remove a department

  // BONUS- Create a query to Find all employees in a given department, join with roles to display role titles

  // BONUS- Create a query to Find all employees by manager, join with departments and roles to display titles and department names
}

module.exports = new DB();
