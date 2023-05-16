const Triangle = require("../lib/triangle.js")

describe("Triangle", () => {
  it("should return logo with text, shape color, and text color as USE, blue and red respectively ", () => {
    const triangle = new Triangle("USE", "blue", "red");
    expect(triangle.create()).toBe('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 15 200, 200 0, 200" fill="blue" /><text x="100" y="185" font-size="70" text-anchor="middle" fill="red">USE</text></svg>');

  });
});