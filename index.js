const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from?"
    },
    {
      type: "input",
      name: "hobby",
      message: "What is your favorite hobby?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your Email?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username."
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL."
    },
     {
       type: "input",
       name: "project",
       message: "what is your project's name?"
     },
     {
       type: "input",
       name: "desc",
       message: "Describe your project!"
     },

  ]);
}
function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>README.md generator</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3> <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">Email: ${answers.email}</li> 
      <li class="list-group-item">GitHub: ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
    <h3> <span class="badge badge-secondary">Project info</span></h3>
    <ul class="list-group">
     <li class="list-group-item">Project name: ${answers.project}</li>
     <li class="list-group-item">Description: ${answers.desc}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}
promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);
    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });