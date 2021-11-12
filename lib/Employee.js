
// creating generic parent class for Manager, Engineer and Intern to build upon. Including name, id, email and defaulting role to role
class Employee {
    constructor(name, id, email) {    
        this.role = "employee";
        this.name = name;
        this.id = id;
        this.email = email;
    };

    // logging the employee name and their role
    getRole() {
        console.log(`${this.name}'s role in the team is ${this.role}`);
    };
    // logging the employee role and their name
    getName() {
        console.log(`The ${this.role}'s name is ${this.name}`);
    };
    // logging the employee name and their employee ID
    getId() {
        console.log(`${this.name}'s employee ID is ${this.id}`);
    };
    // logging the employee's email and name
    getEmail() {
        console.log(`${this.name}'s email is ${this.email}`);
    };
}


module.exports = Employee;