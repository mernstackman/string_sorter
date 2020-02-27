const File = require("./file");
const Sort = require("./sort");

function compare(x, y) {
  const xArr = x.trim().split(" ");
  const yArr = y.trim().split(" ");
  const xLast = xArr[xArr.length - 1];
  const yLast = yArr[yArr.length - 1];

  return xLast.localeCompare(yLast, undefined, { sensitivity: "base" });
}

/* This method is supposed to be used with a file that contains string of people names separated by line*/
function sortByLastName(file) {
  const fileContentArr = File.toArray(file);

  const sortNames = new Sort(fileContentArr, compare);
  const sorted = sortNames.run();
  console.log(sorted);
  return sorted;
}

module.exports = sortByLastName;
