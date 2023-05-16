const Square = require("../lib/square.js")

describe("Square", () => {
  it("should return logo with text, shape color, and text color as USE, blue and red respectively ", () => {
    const square = new Square("USE", "blue", "red");
    expect(square.create()).toBe('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="blue" /><text x="100" y="125" font-size="70" text-anchor="middle" fill="red">USE</text></svg>');

  });
});