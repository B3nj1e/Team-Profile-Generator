const inquirer = require('inquirer');
const Manager = require("../lib/Manager")



inquirer   
.prompt([
    {
        type: 'list', 
        message: "What is the position of your team member?",
        name: "position",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: 'input', 
        message: "What is their name?",
        name: "name",
    },
    {
        type: 'input', 
        message: "What is their employee ID?",
        name: "id",
    },
    {
        type: 'input', 
        message: "What is their email address?",
        name: "email"
    }
    ]).then((data) => {
        if(data.postion == "Manager") {
            const person1 = new Manager(data.name, data.id, data.email, data.position);
            person1.getOfficeNumber();
            console.log(`The Manager has the following details ${person1}`);
        // } else if(data.position == "Employee") {
        // const person1 = new Employee(data.name, data.id, data.email);
        // console.log(`The Employee has the following details ${person1}`);}
        console.log(data);
        }}).catch((error) => console.log(error)
    );