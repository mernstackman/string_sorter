const File = require("./file");
const SortByLastIndex = require("./sort");

/* This method is supposed to be used with a file that contains string of people names separated by line*/
function sortByLastName(file) {
  const fileContentArr = File.toArray(file);

  const sortNames = new SortByLastIndex(fileContentArr);
  const sorted = sortNames.run();

  return sorted;
}

module.exports = sortByLastName;
