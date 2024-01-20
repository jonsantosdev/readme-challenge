// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        name: "email",
        message: "What is your email address?"  
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"  
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"  
    },
    {
        type: "input",
        name: "description",
        message: "Please briefly describe your project."  
    },
    {
        type: "input",
        name: "installation",
        message: "Please type the command line instructions for installation."  
    },
    {
        type: "input",
        name: "usage",
        message: "Are there any information the user need to know about using the repo?"  
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project use?",  
        choices: ["MIT", "GPL", "APACHE", "BSD", "NONE"]
    },
    {
        type: "input",
        name: "contribution",
        message: "How can the user contribute to the repo?"  
    },
    {
        type: "input",
        name: "test",
        message: "Please type the command line to run a test."  
    },
])
.then((answers) => {
    console.log(answers);
    const readMe = generateMarkdown(answers);

    fs.writeFile("README.md", readMe, (err) =>
        err ? console.log(err) : console.log("Successfully created README.md")
    );
});

