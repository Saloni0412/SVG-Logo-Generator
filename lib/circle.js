const parentShape = require("./parentShape");

// class Circle extends parentShape {
//     constructor(text, shapeColor, textColor) {
//         super(text, shapeColor, textColor);
//     }
//     create() {
//         return `
//         <svg version="1.1"
//         width="300" height="200"
//         xmlns="http://www.w3.org/2000/svg">
//         <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
//         <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
//     </svg>`;
//     }
// }

class Circle extends parentShape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor);
    }
    create() {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${this.text}" /> 
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.shapeColor}</text>
    </svg>`;
    }
}
// above example - this.text is shapeColor, this.textColor - red which is undefined, this.shapeColor is text

module.exports = Circle;

