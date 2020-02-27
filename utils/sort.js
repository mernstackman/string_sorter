/* 
This file contain a class that have functionality to sort array
*/

class Sort {
  constructor(array, compare) {
    this.array = array;
    this.compare = compare;
  }

  run() {
    const sortedArray = [].sort.call(this.array, this.compare);
    return sortedArray;
  }
}

module.exports = Sort;
