// // Packages required for this application
// const fs = require('fs');
// const inquirer = require('inquirer');

// do you wnat to create a new team memember? yes/no


class Employee {
    constructor(data) {
        this.name = data.name;
        this.id = data.Id;
        this.email = data.email;
        this.role = "Employee";
    };
}
//     getRole() {
//         console.log(this.role);
//     }
//     getName() {
//         console.log(this.name);
//     };
//     getId() {
//         console.log(this.id);
//     };
//     getEmail() {
//         console.log(this.email);
//     };
// }

// init = (data) => {
//     const person1 = new Employee;

//     person1.getRole();
//     person1.getName();
//     person1.getId();
//     person1.getEmail();
// };


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
            name: "Id",
        },
        {
            type: 'input', 
            message: "What is their email address?",
            name: "email"
        }]).then((data) => {
            const person1 = new Employee(data)
            console.log(person1);
        }).catch((error) => console.log(error)
        );


module.exports = Employee;