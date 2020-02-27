const sortByLastName = require("../utils/sort_by_lastname");
const path = require("path");

const file = path.join(__dirname, "../unsorted-names-list.txt");
const result = sortByLastName(file);
const resultIsArray = Array.isArray(result) ? "array" : "not array";

describe("Sort array of names by last names", function() {
  it("Should tell that the result is array", function() {
    expect(resultIsArray).toBe("array");
  });

  it("Should match the given array", function() {
    const expected = [
      "Avie Annakin",
      "Hailey Annakin",
      "Erna Dorey Battelle",
      "Selle Bellison",
      "Flori Chaunce Franzel",
      "Orson Milka Iddins",
      "Odetta Sue Kaspar",
      "Roy Ketti Kopfen",
      "Madel Bordie Mapplebeck",
      "Debra Micheli",
      "Leonerd Adda Mitchell Monaghan",
      "Leonerd Adda Micheli Monaghan"
    ];
    expect(result).toEqual(expected);
  });
});
