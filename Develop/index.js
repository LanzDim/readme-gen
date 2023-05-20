// TODO: Include packages needed for this application

const inquirer = require ("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("This is my README generator")
console.log("Answer following questions to generate a README")





// TODO: Create an array of questions for user input
const questions = [
    {
type: 'input',
name: 'title',
message: 'What is the project title?',
validate: your_Input => {
    if(your_Input){
        return true;
    } else {
        console.log('Enter a title ')
        return false;
    }
  }
 },
 //adding descriptions for README
 {
     type: 'input',
     name: 'description',
     message: 'Provide a description of the project',
     validate: your_description => {
         if (your_description) { 
             return true;
            } else {
                console.log('Provide a project description!');
                return false;
            }
        }
    },
    //how to install
    {
        type: 'input',
        name: 'description',
        message: 'how to install project?',
        validate: your_intallation => {
            if (your_intallation){
                return true;
            } else {
                console.log('Enter the steps of installation to continue.')
            }
        }
    },
    //checkbox for the license
    {
        type: 'checkbox',
        name: 'license',
        message: 'choose a license fro your project',
        choices: ['MPL 2.0','GNU', 'Apache', 'MIT', 'None of the Above'],
        validate: your_license => {
            if (your_license){
                return true;
            } else {
                console.log('Select a license')
                return false;
            
            }
        }
    },
    //how would they contribute to the project
    {
        type: 'input',
        name: 'contrubution',
        message: 'How can users contribute to the project?',
        validate: your_contribution =>{
        if (your_contribution){
            return true;
        } else {
            console.log('provide information on how they may contribute')
            return false;
        }
    }
},
//test the project
{
    type: 'input',
    name: 'test',
    message: 'how to test a project',
    validate: your_test =>{
        if (your_test){
            return true;
        } else {
            console.log('Explain how to test this project');
            return false;
        }
    }
},
//github input
{
    type: 'input',
    name: 'github',
    message: 'Enter your Github Username',
    validate: github_input => {
        if(github_input){
            return true;
        } else {
            console.log('please enter your Github username')
            return false;
        }
    }
},
//input for email
{
    type: 'input',
    name: 'email',
    message: 'Enter your email',
    validate: your_email => {
        if (your_email){
            return true;
        } else {
            console.log('please enter email')
            return false;
        }
    }
},
    
    


];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err){
            return console.log(err);
        } 
console.log('Success! This is your generated README')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
