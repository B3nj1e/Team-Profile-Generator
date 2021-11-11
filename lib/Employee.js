// // Packages required for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
// const Manager = require("../lib/Manager")



class Employee {
    constructor(name, id, email) {
    // if(id < 0) {
    //     throw new Error("Expected parameter 'id' to be a number");
    // } else if (name !== 'string' || email !== 'string') {
    //     throw new Error("Expected parameter name or email is not a string");
    // }
    
        this.role = "employee";
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getRole() {
        console.log(`${this.name}'s role in the team is ${this.role}`);
    };
    getName() {
        console.log(`The ${this.role}'s name is ${this.name}`);
    };
    getId() {
        console.log(`${this.name}'s employee ID is ${this.id}`);
    };
    getEmail() {
        console.log(`${this.name}'s email is ${this.email}`);
    };
}

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
        }]).then((data) => {
            if(data.position === "Manager") {
                console.log(data.position);
                const employee = new Manager
            } else if(data.position === "Engineer") {
                console.log(data.position);
                const employee = new Engineer()
            } else {
                console.log(data.position);
                const employee = new Intern()
            }
        })
//         {
//             type: 'input', 
//             message: "What is their name?",
//             name: "name",
//         },
//         {
//             type: 'input', 
//             message: "What is their employee ID?",
//             name: "id",
//         },
//         {
//             type: 'input', 
//             message: "What is their email address?",
//             name: "email"
//         }]).then((data) => {
//             if(data.postion === "Manager"){
//                 const person1 = new Manager(data.name, data.id, data.email, data.role);
//                 console.log(`The Manager has the following details ${person1}`);
//             } else if(data.position === "Employee") {
//             const person1 = new Employee(data.name, data.id, data.email);
//             console.log(`The Employee has the following details ${person1}`);}
//             }).catch((error) => console.log(error)
//         );


module.exports = Employee;