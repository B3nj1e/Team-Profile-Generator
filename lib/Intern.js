const Employee = require("./Employee");
// importing the employee class

// creating a new intern subclass constructor using the employee class as a parent
class Intern extends Employee {
    constructor(name, id, email, school) {
    // constructing the parameters to be used in the new subclass
    
    // obtaining the pre-existing parameters from the parent class
        super(name, id, email);  
        this.school = school;
        this.role = "Intern";
    }

    // setting a new method to the new intern class, logs their name and school they attend
    getSchool() {
        console.log(`${this.name} attends ${this.school}`);
    };
}

// exports the intern class
module.exports = Intern;