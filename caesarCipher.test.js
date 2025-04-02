const caesarCipher = require("./caesarCipher");

describe("caesarCipher", () => {
  it("shifts lowercase letters correctly", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });

  it("shifts uppercase letters correctly", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
  });

  it("preserves case", () => {
    expect(caesarCipher("Hello", 5)).toBe("Mjqqt");
  });

  it("wraps from z to a", () => {
    expect(caesarCipher("zebra", 2)).toBe("bgdtc");
  });

  it("preserves punctuation and digits", () => {
    expect(caesarCipher("Hello, world! 123", 5)).toBe("Mjqqt, btwqi! 123");
  });

  it("handles negative shift", () => {
    expect(caesarCipher("Mjqqt", -5)).toBe("Hello");
  });

  it("handles zero shift", () => {
    expect(caesarCipher("Test", 0)).toBe("Test");
  });

  it("handles large shifts (e.g. 27 === 1)", () => {
    expect(caesarCipher("abc", 27)).toBe("bcd");
  });

  it("returns empty string if input is not a string", () => {
    expect(caesarCipher(12345, 3)).toBe("");
    expect(caesarCipher(null, 3)).toBe("");
  });

  it("returns empty string if shift is not a number", () => {
    expect(caesarCipher("test", null)).toBe("");
    expect(caesarCipher("test", "a")).toBe("");
  });
});
