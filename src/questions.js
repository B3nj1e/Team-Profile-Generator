const inquirer = require('inquirer');


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
        if (data.anotherone) {
            console.log(data);
            question();
        }});

            // inquirer.prompt(
            //     {
            //         type: 'list',
            //         message: "What is the position of your team member?",
            //         name: "position",
            //         choices: ["Engineer", "Intern"]
            //     }).then((data) => {
            //     if (data.position == "Engineer") {
            //         console.log(data);
            //         inquirer.prompt([
            //             {
            //                 type: 'input',
            //                 message: "What is their name?",
            //                 name: "name",
            //             },
            //             {
            //                 type: 'number',
            //                 message: "What is their employee ID?",
            //                 name: "id",
            //             },
            //             {
            //                 type: 'input',
            //                 message: "What is their email address?",
            //                 name: "email"
            //             },
            //             {
            //                 type: 'input',
            //                 message: "What is their GitHub username?",
            //                 name: "GitHub"
            //             },
            //             {
            //                 type: 'confirm',
            //                 message: "Would you like to add another team member",
            //                 name: "anotherone",
            //             }]).then((data) => {
            //             if (data.anotherone) {
            //                 console.log(data);
            //                 // question();
            //             } else {
            //                 console.log(data)
            //                 return;
            //             }});
            //     } else {
            //         console.log(data);
            //         inquirer.prompt([
            //             {
            //                 type: 'input',
            //                 message: "What is their name?",
            //                 name: "name",
            //             },
            //             {
            //                 type: 'number',
            //                 message: "What is their employee ID?",
            //                 name: "id",
            //             },
            //             {
            //                 type: 'input',
            //                 message: "What is their email address?",
            //                 name: "email"
            //             },
            //             {
            //                 type: 'input',
            //                 message: "What school do they attend?",
            //                 name: "school"
            //             },
            //             {
            //                 type: 'confirm',
            //                 message: "Would you like to add another team member",
            //                 name: "anotherone",
            //             }]).then((data) => {
            //             if (data.anotherone) {
            //                 console.log(data);
            //                 // question();
            //             } else {
            //                 console.log(data)
            //                 return;
            //             }});
            //     }})}});
                  


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
                    console.log(data);
                    question();
                } else {
                    console.log(data)
                    return;
                }});
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
                    console.log(data);
                    question();
                } else {
                    console.log(data)
                    return;
                }});
        }})};





    // ]).then((data) => {
    //     if(data.postion == "Manager") {
    //         const person1 = new Manager(data.name, data.id, data.email, data.position);
    //         person1.getOfficeNumber();
    //         console.log(`The Manager has the following details ${person1}`);
    //     // } else if(data.position == "Employee") {
    //     // const person1 = new Employee(data.name, data.id, data.email);
    //     // console.log(`The Employee has the following details ${person1}`);}
    //     console.log(data);
    //     }}).catch((error) => console.log(error)
    // );





    // {
    //     type: 'list', 
    //     message: "What is the position of your team member?",
    //     name: "position",
    //     choices: ["Manager", "Engineer", "Intern"]
    // },

    // {
    //     type: 'input', 
    //     message: "What is their name?",
    //     name: "name",
    // },