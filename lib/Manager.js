// officeNumber

// getRole()—overridden to return 'Manager'


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
    },
    {
        type: 'input', 
        message: "What is their office number?",
        name: "officenumber"
    }]).then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officenumber);
        console.log(manager);}).catch((error) => console.log(error)
        );


// Manager.prototype.getOfficeNumber = function() {
//     console.log(`${this.name}'s office number is ${this.officenumber}`);
// }



module.exports = Manager;