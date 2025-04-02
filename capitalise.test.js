const capitalise = require("./capitalise");

describe("capitalise", () => {
  it("capitalises the first letter of a lowercase word", () => {
    expect(capitalise("hello")).toBe("Hello");
  });

  it("returns the same string if the first letter is already capitalised", () => {
    expect(capitalise("World")).toBe("World");
  });

  it("works with single-character strings", () => {
    expect(capitalise("a")).toBe("A");
  });

  it("returns an empty string if input is empty", () => {
    expect(capitalise("")).toBe("");
  });

  it("handles strings starting with non-letters", () => {
    expect(capitalise("1world")).toBe("1world");
    expect(capitalise("!boom")).toBe("!boom");
  });

  it("does not affect the rest of the string", () => {
    expect(capitalise("hello WORLD")).toBe("Hello WORLD");
  });
});
