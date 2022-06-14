exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((res, item) => res += item);
  },

  remove: function(arr, item) {
    return arr.filter(itemArr => itemArr !== item);
  },

  removeWithoutCopy: function(arr, item) {
    arr = arr.filter(itemArr => itemArr !== item);
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(itemArr => itemArr === item).length;
  },

  duplicates: function(arr) {
    const resultArr = [];
    arr.forEach(item => {
      let sumItem = 0;
      arr.forEach(value => {
        if (value === item) return sumItem++;
      });

      if (sumItem > 1) {
        resultArr.indexOf(item) === -1 && resultArr.push(item);
      }
    });
    return resultArr;
  },

  square: function(arr) {
    return arr.map(item => item ** 2);
  },

  findAllOccurrences: function(arr, target) {
    const resultArr = [];
    arr.forEach((item, index) => {
      if (item === target) {
        resultArr.push(index);
      }
    });
    return resultArr;
  }
};
