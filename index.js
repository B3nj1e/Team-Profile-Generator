// const fs = require('fs');
// const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// initial questions to set the manager data
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the name of your team Manager?",
                name: "manager",
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
                question();
            } else {
                const manager = new Manager(data.name, data.id, data.email, data.officenumber)
                console.log(manager);
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
                            let engineer = new Engineer(data.name, data.id, data.email, data.Github);
                            console.log(engineer);
                            question();
                        } else {
                            let engineer = new Engineer(data.name, data.id, data.email, data.Github);
                            console.log(engineer);
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
                            question();
                        } else {
                            let intern = new Intern(data.name, data.id, data.email, data.school);
                            console.log(intern);
                            return;
                        }
                    });
            }
        })
};














// let cardContainer = "";

// renderCard2 = () => {
//     cardContainer += 
//     `
//     <div class="card">
//                 <div class="card-header">
//                     <h2 id="name"></h2>
//                     <h3 id="position"></h3>
//                 </div>
//                 <div class="list-container">
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item"></li>
//                     <li class="list-group-item"></li>
//                     <li class="list-group-item"></li>
//                 </ul>
//                 </div>
//             </div>
//     `;

// };

// renderCard2();

// const htmlContent =
// `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Team Profile Generator</title>
//     <!-- bootstrap cdn -->
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
//         integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
//     <!-- link to CSS styling -->
//     <link rel="stylesheet" href="./team.css">
// </head>

//     ${cardContainer}

// <body>
//     <header id="page-header">
//         <h1>My Team</h1>
//     </header>
//     <div id=body-container>
//         <div id="card-container">

//         </div>
//     </div>


//     <script src="../index.js"></script>
// </body>

// </html>
// `;


// const cssContent =
//     `
// /* removing marin and padding for all elements */
// * {
//     margin: 0;
//     padding: 0;
// }

// /* setting header formating */
// #page-header {
//     padding: 50px;
//     background: rgb(240, 72, 100);
//     text-align: center;
//     color: #fff;
// }

// #body-container {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }

// #card-container{
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
//     width: 66%;
//     background: wheat;
// }

// .card-header {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: rgb(61, 61, 238);
//     color: white;
// }

// .list-container {
//     padding: 10px;
//     background-color: white;
// }

// .list-group {

// }

// .card {
//     border-width: 3px;
//     border-color: black;
//     padding: 30px;
//     width: 33%;
// }
// `;
// function createFiles() {
// fs.writeFile("./dist/team.html", htmlContent, (err) => {
//     if (err) { console.log(err) } else { console.log("team.html file successfully written, see in 'dist' directory") }
// });

// fs.writeFile("./dist/team.css", cssContent, (err) => {
//     if (err) { console.log(err) } else { console.log("team.css file successfully written, see in 'dist' directory") }
// });
// }

// createFiles();





















// renderCard = () => {
//     const cardContainer = document.getElementById("card-container")
//     const card = document.createElement("div");
//     const cardHeader = document.createElement("div");
//     const listContainer = document.createElement("div");
//     const list = document.createElement("ul")
//     const nameEl = document.createElement("h2");
//     const positionEl = document.createElement("h3");
//     const idEl = document.createElement("li");
//     const emailEl = document.createElement("li");
//     const officeNumEl = document.createElement("li");

//     card.setAttribute("class", "card");
//     cardHeader.setAttribute("class", "card-header");
//     listContainer.setAttribute("class", "list-container");
//     list.setAttribute("class", "list-group list-group-flush")

//     listContainer.appendChild(list);
//     card.appendChild(cardHeader);
//     card.appendChild(listContainer);
//     cardContainer.appendChild(card);

//     nameEl.textContent = this.name;
//     positionEl.textContent = this.role;
//     idEl.textContent = this.id;
//     emailEl.textContent = this.email;
//     officeNumEl.textContent = this.officenumber;
// }

// renderCard();

// renderCard2 = () => {
//     const cardContent = 
//     `
//     <div class="card">
//                 <div class="card-header">
//                     <h2 id="name">${this.name}</h2>
//                     <h3 id="position">${this.role}</h3>
//                 </div>
//                 <div class="list-container">
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item">${this.id}</li>
//                     <li class="list-group-item">${this.email}</li>
//                     <li class="list-group-item">${this.officenumber}</li>
//                 </ul>
//                 </div>
//             </div>
//     `;
//     cardContainer += cardContent;
// };

// renderCard2();