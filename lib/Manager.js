const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, officenumber) {
      
        super(name, id, email);  
        this.officenumber = officenumber;
        this.role = "Manager";
    }

    getOfficeNumber() {
        console.log(`${this.name}'s office number is ${this.officenumber}`);
    };
}


// Manager.prototype.getOfficeNumber = function() {
//     console.log(`${this.name}'s office number is ${this.officenumber}`);
// }



module.exports = Manager;