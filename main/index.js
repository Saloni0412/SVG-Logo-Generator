const fs = require("fs");
const inquirer = require('inquirer');

function validateAnswer(value) {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question to move forward";
    }
}

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter text for the logo',
        name: "text",
        validate: (value) => {
            if (value.length > 3 || value.length === 0) {
                return "enter only upto 3 characters"
            }
            return true;
        },
    },
    {
        type: 'input',
        message: 'Enter text colour',
        name: "textcolor",
        validate: validateAnswer,
    },
    {
        type: 'list',
        message: 'Select the shape of the logo',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
        validate: validateAnswer,
    },
    {
        type: 'input',
        message: 'Enter shape colour',
        name: "shapecolour",
        validate: validateAnswer,
    },
])

