/* 
This file contain a class that have functionality to sort array
*/

class SortByLastIndex {
  constructor(array) {
    this.array = array;
    this.run();
  }

  compare(x, y) {
    const xArr = x.trim().split(" ");
    const yArr = y.trim().split(" ");
    const xLast = xArr[xArr.length - 1];
    const yLast = yArr[yArr.length - 1];

    return xLast.localeCompare(yLast, undefined, { sensitivity: "base" });
  }

  run() {
    const sortedArray = [].sort.call(this.array, this.compare);
    return sortedArray;
  }
}

module.exports = SortByLastIndex;
