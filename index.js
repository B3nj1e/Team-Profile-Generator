const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let cardContainer = "";

renderCard1 = (employee) => {
    cardContainer += 
    `
    <div class="card">
                <div class="card-header">
                    <h2 id="name">${employee.name}</h2>
                    <h3 id="position"><i class="fas fa-mug-hot"></i>  ${employee.role}</h3>
                </div>
                <div class="list-container">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">Office Number: ${employee.officenumber}</li>
                </ul>
                </div>
            </div>

    `;
};

renderCard2 = (employee) => {
    cardContainer += 
    `
    <div class="card">
                <div class="card-header">
                    <h2 id="name">${employee.name}</h2>
                    <h3 id="position"><i class="fas fa-glasses"></i>  ${employee.role}</h3>
                </div>
                <div class="list-container">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
                </ul>
                </div>
            </div>

    `;
};

renderCard3 = (employee) => {
    cardContainer += 
    `
    <div class="card">
                <div class="card-header">
                    <h2 id="name">${employee.name}</h2>
                    <h3 id="position"><i class="fas fa-user-graduate"></i>  ${employee.role}</h3>
                </div>
                <div class="list-container">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">School: ${employee.school}</li>
                </ul>
                </div>
            </div>

    `;
};

// initial questions to set the manager data
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the name of your team Manager?",
                name: "name",
            },
            {
                type: 'number',
                message: "What is their employee ID?",
                name: "id",
            },
            {
                type: 'input',
                message: "What is their email address?",
                name: "email"
            },
            {
                type: 'number',
                message: "What is their office number?",
                name: "officenumber"
            },
            {
                type: 'confirm',
                message: "Would you like to add another team member",
                name: "anotherone",
            }])
        .then((data) => {
            // if another team member is added, it will let you select engineer or intern option
            if (data.anotherone) {
                const manager = new Manager(data.name, data.id, data.email, data.officenumber)
                console.log(manager);
                renderCard1(manager);
                console.log(cardContainer);
                question();
            } else {
                const manager = new Manager(data.name, data.id, data.email, data.officenumber)
                console.log(manager);
                renderCard1(manager);
                console.log(cardContainer);
                createFiles(cardContainer);
                return;
            }
        });
};

// inquirer question function to obtain data for engineer or interns
function question() {
    inquirer.prompt(
        {
            type: 'list',
            message: "What is the position of your team member?",
            name: "position",
            choices: ["Engineer", "Intern"]
        }).then((data) => {
            if (data.position == "Engineer") {
                console.log(data);
                inquirer.prompt([
                    {
                        type: 'input',
                        message: "What is their name?",
                        name: "name",
                    },
                    {
                        type: 'number',
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
                        message: "What is their GitHub username?",
                        name: "GitHub"
                    },
                    {
                        type: 'confirm',
                        message: "Would you like to add another team member",
                        name: "anotherone",
                    }]).then((data) => {
                        if (data.anotherone) {
                            let engineer = new Engineer(data.name, data.id, data.email, data.GitHub);
                            console.log(engineer);
                            renderCard2(engineer);
                            console.log(cardContainer);
                            question();
                        } else {
                            let engineer = new Engineer(data.name, data.id, data.email, data.GitHub);
                            console.log(engineer);
                            renderCard2(engineer);
                            console.log(cardContainer);
                            createFiles(cardContainer);
                            return;
                        }
                    });
            } else {
                console.log(data);
                inquirer.prompt([
                    {
                        type: 'input',
                        message: "What is their name?",
                        name: "name",
                    },
                    {
                        type: 'number',
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
                    },
                    {
                        type: 'confirm',
                        message: "Would you like to add another team member",
                        name: "anotherone",
                    }]).then((data) => {
                        if (data.anotherone) {
                            let intern = new Intern(data.name, data.id, data.email, data.school);
                            console.log(intern);
                            renderCard3(intern);
                            console.log(cardContainer);
                            question();
                        } else {
                            let intern = new Intern(data.name, data.id, data.email, data.school);
                            console.log(intern);
                            renderCard3(intern);
                            console.log(cardContainer);
                            createFiles(cardContainer);
                            return;
                        }
                    });
            }
        })
};


init();




const cssContent =
    `

    /* removing marin and padding for all elements */
    * {
        margin: 0;
        padding: 0;
    }
    
    /* setting header formating */
    #page-header {
        padding: 50px;
        background: rgb(240, 72, 100);
        text-align: center;
        color: #fff;
    }
    
    #body-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    #card-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 70%;
    }
    
    .card-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgb(61, 61, 238);
        color: white;
        border-radius: 10px 10px 0 0;
    }
    
    .list-container {
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.63);
        border-radius: 0 0 10px 10px;
    }
    
    .card {
        border-width: 3px;
        border-color: black;
        margin: 10% 15px 0;
        width: 30%; 
        box-shadow: 0 10px 15px 0 rgba(0,0,0,0.2);
        border-radius: 0 0 10px 10px;
    }
`;
function createFiles(cardinfo) {
fs.writeFile("./dist/team.html", `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <!-- bootstrap cdn -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- link to font awesome -->
    <script src="https://kit.fontawesome.com/b5ea887d93.js" crossorigin="anonymous"></script>
    <!-- link to CSS styling -->
    <link rel="stylesheet" href="./team.css">
</head>


<body>
    <header id="page-header">
        <h1>My Team</h1>
    </header>
    <div id=body-container>
        <div id="card-container">

        ${cardinfo}

        </div>
    </div>


    <script src="../index.js"></script>
</body>

</html>
`, (err) => {
    if (err) { console.log(err) } else { console.log("team.html file successfully written, see in 'dist' directory") }
});

fs.writeFile("./dist/team.css", cssContent, (err) => {
    if (err) { console.log(err) } else { console.log("team.css file successfully written, see in 'dist' directory") }
});
}

