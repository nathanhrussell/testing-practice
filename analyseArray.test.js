const analyseArray = require("./analyseArray");

describe("analyseArray", () => {
  it("returns correct average, min, max, and length for a valid array", () => {
    const result = analyseArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({ average: 4, min: 1, max: 8, length: 6 });
  });

  it("handles a single-element array", () => {
    const result = analyseArray([5]);
    expect(result).toEqual({ average: 5, min: 5, max: 5, length: 1 });
  });

  it("returns null for an empty array", () => {
    expect(analyseArray([])).toBeNull();
  });

  it("returns null for non-array input", () => {
    expect(analyseArray("not an array")).toBeNull();
    expect(analyseArray(123)).toBeNull();
    expect(analyseArray(null)).toBeNull();
  });

  it("correctly handles negative numbers", () => {
    const result = analyseArray([-5, 0, 5]);
    expect(result).toEqual({ average: 0, min: -5, max: 5, length: 3 });
  });

  it("handles floating point numbers", () => {
    const result = analyseArray([1.5, 2.5, 3.5]);
    expect(result).toEqual({ average: 2.5, min: 1.5, max: 3.5, length: 3 });
  });
});
