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
      choices: ['deparment', 'role', 'employee']

    }

  ]).then((res) => {
    // TODO- Create a variable to store the user's choice
    // TODO- Create a switch statement to call the appropriate function depending on what the user chose
    const userChoice = res.choice;
    switch (userChoice) {
      case 'deparment':
        function1();
        break;
      case 'role':
        function2();
        break;
      case 'employee':
        function3();
        break;
      default:
        console.log('Incalid choice. Please try again')
    }
  })
    .catch((error) => {
      console.error('Error', err)
    })
}

// TODO- Create a function to View all employees
async function viewEmployees() {
  try {
    const employees = await db.getAllEmployees(); // Add await
    if (employees.length === 0) {
      console.log('There are no employees in the database.');
    } else {
      console.table(employees);
    }
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
}

// BONUS- Create a function to View all employees that belong to a department

// BONUS- Create a function to View all employees that report to a specific manager

// BONUS- Create a function to Delete an employee

// TODO- Create a function to Update an employee's role
async function updateEmployeeRole() {
  try {
    // 1. Get all employees (for selection)
    const employee = await db.getAllEmployees();
    const empoloyeeList = employee.map(({ first_name, last_name, id }) => ({
      name: `${first_name} ${last_name}`,
      value: id
    }))

    console.log(empoloyeeList);
    // 2. Prompt user to choose an employee
    const { chosenEmployee } = await prompt([
      {
        type: 'list',
        name: 'chosenEmployee',
        message: 'Select the employee to update role',

      }
    ]);

    // 3. Get all available roles (for selection)
    const roles = await db.getAllRoles();
    choices: roles.map(role => role.title)

    const { chosenRole } = await prompt([{
      type: 'list',
      name: 'chosenRole',
      message: 'Select the new role for the employee:',

    }
    ])

    // 5. Update employee role in the database using db.updateEmployeeRole(employeeId, roleId)
    await db.updateEmployeeRole(chosenEmployee.id, chosenRole.id);

    console.log('Employee role updated successfully!');
  } catch (error) {
    console.error('Error updating employee role:', error);
  }

}

// BONUS- Create a function to Update an employee's manager

// TODO- Create a function to View all roles
// to make a function to view a function in the termial 
async function viewAllDepartments() {
  //try this code if this code is out error out for any reason runs the catch
  try {
    const departments = await db.getAllDepartments();
    if (departments.length === 0) {
      console.log('there are no roles defined in the database.');
    } else {
      console.table(departments);
    }
  } catch (error) {
    console.error('Error fetching departments:', error)
  }
}
// TODO- Create a function to Add a role
async function addDepartment() {
  try {
    const { title } = await prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the new deparment',
      }
    ]);

    await db.getDeparment(name);
    console.log("New department added successfully!");
  } catch (error) {
    console.error("Erro adding department:", error)
  }


  const { deparment } = await prompt([
    {
      type: 'list',
      name: 'department',
      message: 'Select the department for the new role:',
      choices: departmentChoices.concat('None'),
    }
  ])
  let deparmentId = null;
  if (deparment !== 'None') {
    deparmentId = deparment.find(dept => dept.name === deparment).id;
  }
  await db.addRole(title, salary, deparmentId);
  console.log('New role added successfully!');
}catch (error) {
  console.error('Error adding role:', error);
}
 


// BONUS- Create a function to Delete a role

// TODO- Create a function to View all deparments
async function viewAllDeparments() {
  //try this code if this code is out error out for any reason runs the catch
  try {
    const roles = await db.getAllDeparments();
    if (roles.length === 0) {
      console.log('there are no roles defined in the database.');
    } else {
      console.table(deparment);
    }
  } catch (error) {
    console.error('Error fetching roles:', error)
  }
}


// TODO- Create a function to Add a department
async function addRole() {
  try {
    const deparments = await db.getAllDeparments();
    const departmentChoices = deparments.map(deparment => deparment.name);

    const { deparment } = await prompt([
      {
        type: 'list',
        name: 'department',
        message: 'Select the department for the new role:',
        choices: departmentChoices.concat('None'),
      }
    ])
    let deparmentId = null;
    if (deparment !== 'None') {
      deparmentId = deparment.find(dept => dept.name === deparment).id;
    }
    await db.addRole(title, salary, deparmentId);
    console.log('New role added successfully!');
  } catch (error) {
    console.error('Error adding role:', error);
  }

}

// BONUS- Create a function to Delete a department

// BONUS- Create a function to View all departments and show their total utilized department budget

// TODO- Create a function to Add an employee
async function updateEmployee() {
  try {
    const deparments = await db.getAllEmployees();
    const departmentChoices = deparments.map(deparment => deparment.name);

    const { deparment } = await prompt([
      {
        type: 'list',
        name: 'employees',
        message: 'Select the employees for the new role:',
        choices: departmentChoices.concat('None'),
      }
    ])
    let employeeId = null;
    if (employee !== 'None') {
      employeeId = employee.find(dept => dept.name === employee).id;
    }
    await db.addRole(title, salary, employee);
    console.log('New role added successfully!');
  } catch (error) {
    console.error('Error adding role:', error);
  }

}

// Exit the application
function quit() {
  console.log("Goodbye!");
  process.exit();
}
