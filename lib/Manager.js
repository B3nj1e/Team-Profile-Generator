const Employee = require("./Employee");
// importing the employee class constructor for the employee.js file

// creating a new Manager constructor class, extending upon the employee class
class Manager extends Employee {
    // identifying constructor parameters
    constructor(name, id, email, officenumber) {
      
        super(name, id, email);  
        this.officenumber = officenumber;
        this.role = "Manager";
    }

    // Adding a new method to the new class, logging the manager's name and office number
    getOfficeNumber() {
        console.log(`${this.name}'s office number is ${this.officenumber}`);
    };

}


module.exports = Manager;