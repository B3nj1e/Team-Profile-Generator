// school

// getSchool()

// getRole()—overridden to return 'Intern'


const Employee = require("./Employee");


class Intern extends Employee {
    constructor(name, id, email, school) {
      
        super(name, id, email);  
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        console.log(`${this.name} attends ${this.school}`);
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
        message: "What school do they attend?",
        name: "school"
    }]).then((data) => {
        const manager = new Intern(data.name, data.id, data.email, data.school);
        console.log(manager);}).catch((error) => console.log(error)
        );

module.exports = Intern;