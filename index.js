const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");

init();

// Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "City of Pawnee" }).render();

  console.log(logoText);

  loadMainPrompts();
}

function loadMainPrompts() {
  prompt([
    // TODO- Create first question user will see- "What would you like to do?"
    {
      type: 'list',
      name: 'choice',
      Message: 'What would you like to do?',
      choices: ['department', 'role', 'employee', 'addEmployee', 'update', 'add', 'quit']

    }

  ]).then((res) => {
    // TODO- Create a variable to store the user's choice
    // TODO- Create a switch statement to call the appropriate function depending on what the user chose
    const userChoice = res.choice;
    switch (userChoice) {
      case 'employee':
        viewAllEmployees();
        break;
      case "update":
        updateEmployeeRole();
        break;
        case 'department':
        viewAllDepartments();
        break;
      case 'add':
        addDepartment();
        break;
      case 'role':
        viewAllRoles();
        break;
      case "addEmployee":
        addingEmployee();
        break;
        case "quit":
          quit();
          break;


      default:
        console.log('Invalid choice. Please try again')
    }
  })
    .catch((error) => {
      console.error('Error', error)
    })
}

// TODO- Create a function to View all employees
async function viewAllEmployees() {
  try {
    const employees = await db.getAllEmployees(); // Add await
    if (employees.length === 0) {
      console.log('There are no employees in the database.');
    } else {
      console.table(employees.rows);
    }
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
  console.log("viewEmployess")
  loadMainPrompts()
}

// TODO- Create a function to Update an employee's role
async function updateEmployeeRole() {
  // try {
  //   // 1. Get all employees (for selection)
  //   const employee = await db.getAllEmployees();
  //   const empoloyeeList = employee.map(({ first_name, last_name, id }) => ({
  //     name: `${first_name} ${last_name}`,
  //     value: id
  //   }))

  //   console.log(empoloyeeList);
  //   // 2. Prompt user to choose an employee
  //   const { chosenEmployee } = await prompt([
  //     {
  //       type: 'list',
  //       name: 'chosenEmployee',
  //       message: 'Select the employee to update role',

  //     }
  //   ]);

  //   // 3. Get all available roles (for selection)
  //   const roles = await db.getAllRoles();
  //   choices: roles.map(role => role.title)

  //   const { chosenRole } = await prompt([{
  //     type: 'list',
  //     name: 'chosenRole',
  //     message: 'Select the new role for the employee:',

  //   }
  //   ])

  //   // 5. Update employee role in the database using db.updateEmployeeRole(employeeId, roleId)
  //   await db.updateEmployeeRole(chosenEmployee.id, chosenRole.id);

  //   console.log('Employee role updated successfully!');
  // } catch (error) {
  //   console.error('Error updating employee role:', error);
  // }
  console.log("updateEmployeeRole")
  loadMainPrompts()
}

// TODO- Create a function to View all roles
// to make a function to view a function in the termial 
async function viewAllDepartments() {
  //try this code if this code is out error out for any reason runs the catch
  // try {
  //   const departments = await db.getAllDepartments();
  //   if (departments.length === 0) {
  //     console.log('there are no roles defined in the database.');
  //   } else {
  //     console.table(departments);
  //   }
  // } catch (error) {
  //   console.error('Error fetching departments:', error)
  // }
  console.log("viewAllDepartments")
  loadMainPrompts()
}
// TODO- Create a function to Add a role
async function addDepartment() {
  // try {
  //   const { title } = await prompt([
  //     {
  //       type: 'input',
  //       name: 'title',
  //       message: 'Enter the title of the new department',
  //     }
  //   ]);

  //   await db.getdepartment(name);
  //   console.log("New department added successfully!");
  // } catch (error) {
  //   console.error("Erro adding department:", error)
  // }

  // try {
  //   const { department } = await prompt([
  //     {
  //       type: 'list',
  //       name: 'department',
  //       message: 'Select the department for the new role:',
  //       choices: departmentChoices.concat('None'),
  //     }
  //   ])
  //   let departmentId = null;
  //   if (department !== 'None') {
  //     departmentId = department.find(dept => dept.name === department).id;
  //   }
  //   await db.addRole(title, salary, departmentId);
  //   console.log('New role added successfully!');
  // } catch (error) {
  //   console.error('Error adding role:', error);
  // }
  console.log("addDepartments")
  loadMainPrompts()
}

// TODO- Create a function to View all departments
//try this code if this code is out error out for any reason runs the catch

// TODO- Create a function to Add a department
async function viewAllRoles() {
  // try {
  //   const departments = await db.getAlldepartments();
  //   const departmentChoices = departments.map(department => department.name);

  //   const { title, salary } = await prompt([
  //     {
  //       type: 'input',
  //       name: 'title',
  //       message: 'Enter the salary for the new role:',
  //     },
  //     {
  //       type: 'number',
  //       name: 'salary',
  //       message: 'Enter the salary for the new role:',
  //     }
  //   ])

  //   const { department } = await prompt([
  //     {
  //       type: 'input',
  //       name: 'department',
  //       message: 'Select the department for the new role',
  //       choices: departmentChoices.concat("None")
  //     },

  //   ])

  //   let departmentId = null;
  //   if (department !== 'None') {
  //     departmentId = department.find(dept => dept.name === department).id;
  //   }
  //   await db.addRole(title, salary, departmentId);
  //   console.log('New role added successfully!');
  // } catch (error) {
  //   console.error('Error adding role:', error);
  // }
  console.log("viewAllRolls")
  loadMainPrompts()
}

// TODO- Create a function to Add an employee
function addingEmployee() {
  console.log('add employee');
  loadMainPrompts()
}
// Exit the application
function quit() {
  console.log("Goodbye!");
  process.exit();
}
