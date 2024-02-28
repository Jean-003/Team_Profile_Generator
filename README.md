# Title 

Team Profile Generator

## Objective 

This project utilised JavaScript and the [Inquirer package](https://www.npmjs.com/package/inquirer) to create a command-line application that will take in information about employees on a software engineering team and then generate an HTML webpage that displays summaries for each person.

### The URL of the project's GitHub Repository

https://github.com/Jean-003/Team_Profile_Generator 


### Sample of an HTML file generated using this application

*******************

## Usage

To generate an HTML webpage that displays summaries for each employee in a sotware engineering team with the following criteria:

-Name
-Employee ID
-Email address
-Office number
-Email
-GitHub username
-School


User should run the following command in their terminal or their GitBash:

```
node index.js

```

Next, the user will be prompted to enter an answer to the first question shown below:

_What is the Manager's Name?_

Upon entering an answer, a series of 3 - 4 more questions requesting the user to enter their responses follows.

Next the user will be asked if they would like to 'add another employee' (3 options are provided - Engineer, Intern, and No) and based on the user's response a series of 3-4 more questions per employee type requesting the user to enter employee details follows.

Anytime that the user decides to not add anymore employees, the questions will cease and a 'team HTML' file containing all the user's responses is generated. 


**Image showing the result of running the command: node index.js in the intergrated terminal in Visual Studio Code.**



![Screenshot 2024-02-28 184552](https://github.com/Jean-003/Team_Profile_Generator/assets/152238337/242998a0-60e0-40c6-a9e3-c7f0aefc858e)









**When this team.index HTML is opened in the browser, a webpage that displays summaries for each employee who are part of a sotware engineering team is displayed as shown in the example below:**







![Screenshot 2024-02-28 184634](https://github.com/Jean-003/Team_Profile_Generator/assets/152238337/91b02715-5bce-4f25-88e6-deb35e359832)




## Tests

All tests passed (utilised the Jest package).



![Screenshot 2024-02-27 211904](https://github.com/Jean-003/Team_Profile_Generator/assets/152238337/e1ee7161-d5f4-4745-9d7d-58aff9387735)




**_An example HTML file that is gerenerated after running the node index.js command can be found located in the 'output folder inside the 'starter' folder'_**


## Licences 

 None

## References 

The following starter code was supplied by edX:

### Page Template Javascript file:

// creates the team
<!-- const generateTeam = team => {

    // creates the manager html
    const generateManager = manager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // creates the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // creates the html for interns
    const generateIntern = intern => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// exports function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};


 -->

 ### Code to Run the Tests

 _See tests folder inside the starter folder_
