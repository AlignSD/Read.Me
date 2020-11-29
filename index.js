const fs = require("fs");
const inquirer = require("inquirer");

var user
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'screenshot path',
            name: 'screenshot',   
        },
        {
            type: 'input',
            message: 'link to the live project',
            name: 'projectLink',
        },
        {
            type: 'input',
            message: 'Whats your projects User Story?',
            name: 'userStory',
        },
        {
            type: 'input',
            message: 'Give a dscription of your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What tools were used in the project?',
            name: 'tools',
        },
        {
            type: 'input',
            message: 'Link the projects clone link',
            name: 'clone',
        },
        {
            type: 'input',
            message: 'What license was used?',
            name: 'license',
        },
        
    ])
    .then (
        (response) =>
            fs.appendFile('Readme.md', (`# ${response.projectName}.

            ![Portforlio screen shot](${response.sceenshot})
            
            ${response.projectLink} - Link To Website!
            
            ## User Story
            
            ${response.userStory}. 
            
            ## Table of Contents
            
            * Description
            
            * Tools Used
            
            * Want to Contribute?
            
            * License
            
            ## Description
            
            ${response.description}
            
            ## Tools Used
            
            * ${response.tools}
            
            ## Want to Contribute?
            
            Find any errors or typos that you want to help fix?
            
            Fork This Repository!
            
            Then Clone it to your desktop to make changes.
            
            > $ git clone ${response.clone}<br>
            > $ cd ${response.projectName}
            
            ## License
            
            ${response.license}`), 
            
        (err) =>
            err ? console.error(err) : console.log('Your Site Has Been Made!')
            )
        )