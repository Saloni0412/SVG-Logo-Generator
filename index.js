const fs = require("fs");
const inquirer = require('inquirer');
const fileName = "./examples/logo.svg";
const Circle = require("./lib/circle.js");
const Triangle = require("./lib/triangle.js");
const Square = require("./lib/square.js");

function validateAnswer(value) {
  if (value != "") {
    return true;
  } else {
    return "Please answer the question to move forward";
  }
}

function createShape(response) {
  let userShape;
  if (response.shape === "Circle") {
    userShape = new Circle(
      response.text,
      response.shapeColor,
      response.textColor
    );

  }


  if (response.shape === "Square") {
    userShape = new Square(
      response.text,
      response.shapeColor,
      response.textColor
    );

  }

  if (response.shape === "Triangle") {
    userShape = new Triangle(
      response.text,
      response.shapeColor,
      response.textColor
    );

  }
  const svg = userShape.create();

  fs.writeFile(fileName, svg, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated logo.svg");
    }
  });
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
  .then((response) => {
    createShape(response)
  })
