const Circle = require("../lib/circle.js")

describe("Circle", () => {
  it("should return logo with text, shape color, and text color as USE, blue and red respectively ", () => {
    const circle = new Circle("USE", "blue", "red");
    expect(circle.create()).toBe('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="blue" /><text x="150" y="125" font-size="70" text-anchor="middle" fill="red">USE</text></svg>');

  });
});