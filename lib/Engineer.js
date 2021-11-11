// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'

const Employee = require("./Employee");


class Engineer extends Employee {
    constructor(name, id, email, github) {
      
        super(name, id, email);  
        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        console.log(`${this.name}'s github profile is ${this.github}`);
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
        message: "What is their github username?",
        name: "github"
    }]).then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.github);
        console.log(manager);}).catch((error) => console.log(error)
        );

module.exports = Engineer;