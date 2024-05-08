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
    return this.query(`
    SELECT employee.id, employee.name, roles.title AS role, roles.salary, departments.name AS department, employee.manager_id
    FROM employee
    JOIN roles ON employee.role_id = roles.id
    JOIN departments ON roles.department_id = departments.id
  `);
  }

  // TODO- Create a query to Find all employees except the given employee id
  async updateEmployeeRole(employeeId, newRoleId) {
    return this.query("UPDATE employee SET role_id = $1 WHERE id = $2", [newRoleId, employeeId]);
  }

  // TODO- Create a query to Create a new employee
  async createEmployees(name, roleId, managerId) {
    return this.query("INSERT INTO employee (name, role_id, manager_id) VALUES ($1, $2, $3)", [name, roleId, managerId]);
  }
  // TODO- Create a query to Update the given employee's role
   async getAllRoles() {
    return this.query(`
    SELECT roles.id, roles.title, roles.salary, departments.name AS department
    FROM roles
    JOIN departments ON roles.department_id = departments.id
  `);
  }

  // TODO- Create a query to Find all roles, join with departments to display the department name
  getAllDepartments() {
    return this.query("SELECT * FROM department");
  }
  // TODO- Create a query to Create a new role
  async createRole(title, salary, departmentId) {
    return this.query("INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)", [title, salary, departmentId]);
  }

  // TODO- Create a query to Find all departments
async getAllDepartments() {
  return this,query("SELECT * FROM department")
}

  // TODO- Create a query to Create a new department
 async addDepartment(name) {
    return this.query("INSERT INTO department (name) VALUES ($1)", [name]);
  }


}

module.exports = new DB();
