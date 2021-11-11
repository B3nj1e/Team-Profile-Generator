const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

inquirer   
    .prompt([
        {
            type: 'list', 
            message: "What is the position of your team member?",
            name: "position",
            choices: ["Manager", "Engineer", "Intern"]
        }]).then((data) => {
            if(data.position === "Manager") {
                console.log(data.position);
                const employee = new Manager()
            } else if(data.position === "Engineer") {
                console.log(data.position);
                const employee = new Engineer()
            } else {
                console.log(data.position === "Intern");
                const employee = new Intern()
            }
        })