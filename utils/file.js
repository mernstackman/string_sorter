const fs = require("fs");
/* 
This file define a class for file operation 
*/

class File {
  static toArray(filename) {
    // Read file synchronously
    const res = fs.readFileSync(filename);

    // Convert fetched content to array using split() method
    const array = res
      .toString()
      .replace(/\r\n/g, "\n")
      .split("\n");

    return array;
  }
}

module.exports = File;
