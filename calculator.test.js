const calculator = require("./calculator");

describe("calculator", () => {
  describe("add", () => {
    it("adds two numbers", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });
  });

  describe("subtract", () => {
    it("subtracts the second number from the first", () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });
  });

  describe("multiply", () => {
    it("multiplies two numbers", () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });
  });

  describe("divide", () => {
    it("divides the first number by the second", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it("throws an error when dividing by zero", () => {
      expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
    });
  });
});
