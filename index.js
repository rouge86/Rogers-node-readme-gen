// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
console.log("readme gen running");
const MarkDown = require("./lib/ReadMeGen");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project Title?",
  },
  {
    type: "input",
    name: "description",
    message: "Add description",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions",
    default: "npm install",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage",
  },
  {
    type: "input",
    name: "contribution",
    message: "Contribution information",
  },
  {
    type: "input",
    name: "test",
    message: "Test instructions",
    default: "npm test",
  },
  {
    type: "input",
    name: "email",
    message: "For questions(email)?",
    validate: (answer) => {
      const pass = answer.match(/\S+@\S+\.\S+/);
      if (pass) {
        return true;
      }
      return "Please enter a valid email address.";
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter github page",
  },
  {
    type: "list",
    name: "license",
    message: "License?",
    choices: ["mit", "isc", "gplv3", "open", "none"],
    filter(val) {
      return val.toLowerCase();
    },
  },
];

//Testing w/ Jest
function hello(name) {
  return `Hello ${name}`;
}
exports.hello = hello;

// TODO: Create a function to write README file
// TODO: Create a function to initialize
function init() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      const mark = MarkDown.generateReadme(answers);
      fs.writeFile("userREADME.md", mark, function (err) {
        if (err) {
          console.log("could not save file", err);
        } else {
          console.log("Success: new README file generated in current folder");
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
