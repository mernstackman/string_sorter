const fs = require("fs");
const sortByLastName = require("./sort_by_lastname");
const fileData = require("../edit_this");

const sourceFile = fileData.sourceFile;
const destinationFile = fileData.destinationFile;

/* Store the sorted array to data variable */
const data = sortByLastName(sourceFile);

// Write to file
const strings = data.join("\n");
fs.writeFileSync(destinationFile, strings);

/* Export data so it can be used by handlebars configuration to display it on the browser */
module.exports = data;
