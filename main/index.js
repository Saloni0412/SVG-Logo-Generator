const fs = require("fs");
const inquirer = require('inquirer');
const fileName = "../examples/logo.svg";
const circle = require("../lib/circle.js");
const triangle = require("../lib/triangle.js");
const square = require("../lib/square.js");

function validateAnswer(value) {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question to move forward";
    }
}

function createShape(response) {
    if (response.shape === "Circle") {
      let userShape = new circle(
        response.shapeColor,
        response.text,
        response.textColor
      );
      return userShape.create();
    }
  
    if (response.shape === "Square") {
      let userShape = new square(
        response.shapeColor,
        response.text,
        response.textColor
      );
      return userShape.create();
    }
  
    if (response.shape === "Triangle") {
      let userShape = new triangle(
        response.shapeColor,
        response.text,
        response.textColor
      );
      return userShape.create();
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
        name: "textColor",
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
        name: "shapeColor",
        validate: validateAnswer,
    },
])
.then
((response) => {
    createFile(response);
    console.log(response.textColor)
    return response; 
    
})

function createFile(response) {
    const svg = createShape(response);
    fs.writeFile(fileName, svg, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Generated logo.svg");
        }
      });
}
