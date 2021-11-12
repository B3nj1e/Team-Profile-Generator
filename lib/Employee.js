// // Packages required for this application
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('../src/questions');


class Employee {
    constructor(name, id, email) {    
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


module.exports = Employee;