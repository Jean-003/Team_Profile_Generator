const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


//Code to gather information about the development team members and to render the HTML file.
let team = []
function displayOptions() {


function createManager() {

    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "Manager's name?"
      
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is their employee ID?',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
        
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?',
        
    },  
  ])
  .then((answers) => { 

   let {title, employeeID, email, officeNumber} = answers 
   const manager = new Manager(title, employeeID, email, officeNumber) 
   team.push(manager)
   createTeam()
});
}

function createTeam() {
  inquirer
.prompt([
    {
    type: 'list',
    name: 'employeeType',
    message: 'Add another employee?',
    choices: ['Engineer', 'Intern', 'No'], 
},
])

.then(answers => {
  switch (answers.employeeType) {
    case "Engineer":
      // call engineer function
      createEngineer();
      break;
    case "Intern":
      // call intern function
      createIntern();
      break;
    default:
  
      if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
      }
      const generatedHTML = render(team);
        fs.writeFileSync(outputPath, generatedHTML);
      
  }
});
};


function createEngineer() {

    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "Engineer's name?"
      
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is their employee ID?',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
        
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is their GitHub username?',     
  },
])
.then((answers) => { 
  let {title, employeeID, email, username} = answers 
  const engineer = new Engineer(title, employeeID, email, username) 
  team.push(engineer)
  createTeam()
});

}

function createIntern() {

    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "Intern's name?"
      
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is their employee ID?',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
        
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is their school?',
        
    },
  
  ])
  .then((answers) => {
    let {title, employeeID, email, school} = answers 
    const intern = new Intern(title, employeeID, email, school) 
    team.push(intern)
    createTeam()
});
}
createManager()
}

displayOptions()







