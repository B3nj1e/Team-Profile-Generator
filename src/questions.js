// const inquirer = require('inquirer');

// // initial questions to set the manager data
// function init() {
// inquirer
//     .prompt([
//         {
//             type: 'input',
//             message: "What is the name of your team Manager?",
//             name: "manager",
//         },
//         {
//             type: 'number',
//             message: "What is their employee ID?",
//             name: "id",
//         },
//         {
//             type: 'input',
//             message: "What is their email address?",
//             name: "email"
//         },
//         {
//             type: 'number',
//             message: "What is their office number?",
//             name: "officenumber"
//         },
//         {
//             type: 'confirm',
//             message: "Would you like to add another team member",
//             name: "anotherone",
//         }])
//     .then((data) => {
//         // if another team member is added, it will let you select engineer or intern option
//         if (data.anotherone) {
//             console.log(data);
//             question();
//         } else {
//             console.log(data);
//             return;
//         }});
// };

// // inquirer question function to obtain data for engineer or interns
// function question() {
//     inquirer.prompt(
//         {
//             type: 'list',
//             message: "What is the position of your team member?",
//             name: "position",
//             choices: ["Engineer", "Intern"]
//         }).then((data) => {
//         if (data.position == "Engineer") {
//             console.log(data);
//             inquirer.prompt([
//                 {
//                     type: 'input',
//                     message: "What is their name?",
//                     name: "name",
//                 },
//                 {
//                     type: 'number',
//                     message: "What is their employee ID?",
//                     name: "id",
//                 },
//                 {
//                     type: 'input',
//                     message: "What is their email address?",
//                     name: "email"
//                 },
//                 {
//                     type: 'input',
//                     message: "What is their GitHub username?",
//                     name: "GitHub"
//                 },
//                 {
//                     type: 'confirm',
//                     message: "Would you like to add another team member",
//                     name: "anotherone",
//                 }]).then((data) => {
//                 if (data.anotherone) {
//                     console.log(data);
//                     question();
//                 } else {
//                     console.log(data)
//                     return;
//                 }});
//         } else {
//             console.log(data);
//             inquirer.prompt([
//                 {
//                     type: 'input',
//                     message: "What is their name?",
//                     name: "name",
//                 },
//                 {
//                     type: 'number',
//                     message: "What is their employee ID?",
//                     name: "id",
//                 },
//                 {
//                     type: 'input',
//                     message: "What is their email address?",
//                     name: "email"
//                 },
//                 {
//                     type: 'input',
//                     message: "What school do they attend?",
//                     name: "school"
//                 },
//                 {
//                     type: 'confirm',
//                     message: "Would you like to add another team member",
//                     name: "anotherone",
//                 }]).then((data) => {
//                 if (data.anotherone) {
//                     console.log(data);
//                     question();
//                 } else {
//                     console.log(data)
//                     return;
//                 }});
//         }})};


// init();

// module.exports = "questions"

