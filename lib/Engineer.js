const Employee = require("./Employee");
// importing the employee class to build up

// creating a new engineer class constructor, building upon the employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
    // identifying the parameters for the new engineer class
      
    // using the pre-existing parameters from the employee class
        super(name, id, email);  
        this.github = github;
        this.role = "Engineer";
    }

    // setting a new method to the new manager method, logging the enginners name and github username
    getGithub() {
        console.log(`${this.name}'s github username is ${this.github}`);
    };

}

// exporting the engineer class
module.exports = Engineer;