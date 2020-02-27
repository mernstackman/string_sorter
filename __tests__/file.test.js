const fs = require("fs");
const path = require("path");
const File = require("../utils/file");
const file = path.join(__dirname, "../unsorted-names-list.txt");
describe("Convert file to array", function() {
  let fileExist;
  let result;
  console.log(file);

  beforeAll(function() {
    fileExist = fs.access(file, fs.F_OK, (err, stat) => {
      if (err) {
        return null;
      }
      return 1;
    });

    result = File.toArray(file);
  });

  it("File.convertToArray should be a function", function() {
    const proptype = typeof File.toArray;
    expect(proptype).toBe("function");
  });

  it("The file should exist", function() {
    expect(fileExist).not.toBeNull();
  });

  it("Should return an array of strings", async function() {
    const restType = Array.isArray(result) ? "array" : "failed";

    expect(restType).toBe("array");
  });
});
