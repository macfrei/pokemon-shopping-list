import add from "./add";

describe("add function", () => {
  it("returns the sum of two numbers", () => {
    const result = add(1, 2);

    expect(result).toBe(3);
  });

  it("returns a number if one parameter is a string", () => {
    const result = add("1", 2);

    expect(result).toBe(3);
  });
});
