const countries = require("./countries");

test("for empty string ==> return an empty array", () => {
    const result = countries.find("");
    expect(result).toEqual([]);
});

test("to make sure the array has no more than 4 results", () => {
    const result = countries.find();
    expect(result.length).toBeLessThanOrEqual(4);
});

test("the search is case insensitive", () => {
    const result = countries.find("gErMaNy");
    expect(result[0]).toBe("Germany");
});

test("no matching countries ==> return an empty array", () => {
    const result = countries.find("sokosoko");
    expect(result).toEqual([]);
});
