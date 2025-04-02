const reverseString = require("./reverseString");

describe("reverseString", () => {
  it("reverses a regular string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("reverses a string with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  it("reverses a string with special characters", () => {
    expect(reverseString("123!@#")).toBe("#@!321");
  });

  it("returns an empty string if input is empty", () => {
    expect(reverseString("")).toBe("");
  });

  it("returns an empty string if input is not a string", () => {
    expect(reverseString(null)).toBe("");
    expect(reverseString(undefined)).toBe("");
    expect(reverseString(123)).toBe("");
  });

  it("handles single-character strings", () => {
    expect(reverseString("a")).toBe("a");
  });
});
