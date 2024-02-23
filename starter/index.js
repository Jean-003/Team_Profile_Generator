const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

function createTeam () {
      inquirer
    .prompt([
        {
        type: 'list',
        name: 'employee type',
        message: 'Add another employee?',
        choices: ['Engineer', 'Intern'], 
    },
    ])
 }

function createManager () {

    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "Manager's name?"
      
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is their employee ID?',
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is their email address?',
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is their office number?',
        
    },  
  ])

}

function createEngineer () {

    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "Engineer's name?"
      
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is their employee ID?',
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is their email address?',
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is their office number?',     
  },
])

}
function createIntern () {

    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "Intern's name?"
      
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is their employee ID?',
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is their email address?',
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is their office number?',
        
    },
  
  ])

}

promptUser()
.then((answers) => writeFileAsync('index.html', generateHTML(answers)))
.then(() => console.log('Successfully wrote to index.html'))
.catch((err) => console.error(err));