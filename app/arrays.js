exports = typeof window === 'undefined' ? global : window;

const isArrayAndNoZero = (array) => {
  return Array.isArray(array) && (array.length > 0);
}

const isNumberItem = (item) => {
  const isItem = !(item === null || typeof item === "undefined");
  return isItem && typeof item === "number";
}

exports.arraysAnswers = {
  /**
   * You should be able to determine the location of an item in an array.
   *
   * @example
   *   [1, 7, 8, 5], 7    => 1
   *   [5, 9, 4, 6, 2], 6 => 3
   */
  indexOf: function(arr, item) {
    if (!isArrayAndNoZero(arr)) {
      return null;
    }

    return arr.indexOf(item);
  },

  /**
   * You should be able to sum the items of an array.
   *
   * @example
   *   [1, 2, 4]    => 7
   *   [2, 5, 3, 4] => 14
   */
  sum: function(arr) {
    if (!isArrayAndNoZero(arr) && !arr.every(isNumberItem)) {
      return null;
    }

    return arr.reduce((res, item) => res + item);
  },

  /**
   * You should be able to remove all instances of a value from an array.
   *
   * @example
   *   [1, 2, 4], 2          => [1, 4]
   *   [2, 5, 3, 4, 5, 5], 5 => [2, 3, 4]
   */
  remove: function(arr, item) {
    if (!isArrayAndNoZero(arr)) {
      return null;
    }

    return arr.filter(element => element !== item);
  },

  /**
   * You should be able to remove all instances of a value from an array, returning the original array.
   *
   * @example
   *   [1, 2, 4], 2          => [1, 4]
   *   [2, 5, 3, 4, 5, 5], 5 => [2, 3, 4]
   */
  removeWithoutCopy: function(arr, item) {
    if (!isArrayAndNoZero(arr)) {
      return null;
    }

    arr.forEach((element, index)=>{
      if (element === item) {
        arr.splice(index, index+1);
      }
    });

    return arr;
  },

  /**
   * You should be able to add an item to the end of an array.
   *
   * @example
   *   [1, 2, 4], 5       => [1, 2, 4, 5]
   *   [2, 5, 3, 4, 1], 5 => [2, 5, 3, 4, 1, 5]
   */
  append: function(arr, item) {
    if (!isArrayAndNoZero(arr)) {
      return null;
    }

    return [...arr, item];
  },

  /**
   * You should be able to remove the last item of an array.
   *
   * @example
   *   [1, 2, 4]       => [1, 2]
   *   [2, 5, 3, 4, 1] => [2, 5, 3, 4]
   */
  truncate: function(arr) {
    if (!isArrayAndNoZero(arr)) {
      return null;
    }

    return arr.slice(0, -1);
  },

  /**
   * You should be able to add an item to the beginning of an array.
   *
   * @example
   *   [1, 2, 4], 9       => [9, 1, 2, 4]
   *   [2, 5, 3, 4, 1], 8 => [8, 2, 5, 3, 4, 1]
   */
  prepend: function(arr, item) {
    if (!isArrayAndNoZero(arr)) {
      return null;
    }

    return [item, ...arr];
  },

  /**
   * You should be able to remove the first item of an array.
   *
   * @example
   *   [1, 2, 4]       => [2, 4]
   *   [3, 5, 3, 4, 1] => [5, 3, 4, 1]
   */
  curtail: function(arr) {
    if (!isArrayAndNoZero(arr)) {
      return null;
    }

    return arr.slice(1, arr.length);
  },

  /**
   * You should be able to join together two arrays.
   *
   * @example
   *   [1, 2, 4], [7, 8]       => [1, 2, 4, 7, 8]
   *   [3], [5, 9, 3]          => [3, 5, 9, 3]
   */
  concat: function(arr1, arr2) {
    if(!isArrayAndNoZero(arr1) && !isArrayAndNoZero(arr2)) {
      return null;
    }

    return arr1.concat(arr2);
  },

  /**
   * You should be able to add an item anywhere in an array.
   *
   * @example
   *   [1, 2, 4], a, 1       => [1, a, 2, 4]
   *   [5, 9, 3], b, 2          => [5, 9, b, 3]
   */
  insert: function(arr, item, index) {
    if(!isArrayAndNoZero(arr) && !isNumberItem(index)) {
      return null;
    }

    const newArr = [...arr];

    newArr.splice(index, 0, item);

    return newArr;
  },

  /**
   * You should be able to count the occurences of an item in an array.
   *
   * @example
   *   [1, 2, 4, 2, 2], 2       => 3
   *   [5, 9, 3, 5], 5          => 2
   */
  count: function(arr, item) {
    if(!isArrayAndNoZero(arr)) {
      return null;
    }

    return arr.filter(itemArr => itemArr === item).length;
  },

  /**
   * You should be able to find duplicates in an array.
   *
   * @example
   *   [1, 2, 4, 2, 2]       => [2]
   *   [5, 9, 3, 5, 3, 3]    => [5, 3]
   */
  duplicates: function(arr) {
    if (!isArrayAndNoZero(arr)) {
      return null;
    }

    const resultArr = [];
    const len = arr.length;

    for (let i = 0; i < len; i++) {
      let sumItem = 0;

      for (let j = 0; j < len; j++) {
        if (arr[j] === arr[i]) sumItem++;
      }

      if (sumItem > 1 && resultArr.indexOf(arr[i]) === -1) {
        resultArr.push(arr[i]);
      }
    }

    return resultArr;
  },

  /**
   * You should be able to square each number in an array.
   *
   * @example
   *   [1, 2, 4] => [1, 4, 16]
   *   [5, 9]    => [25, 81]
   */
  square: function(arr) {
    if (!isArrayAndNoZero(arr)) {
      return null;
    }

    return arr.map(item => item ** 2);
  },

  /**
   * You should be able to find all occurrences of an item in an array.
   *
   * @example
   *   [1, 2, 4], 2             => [1]
   *   [5, 9, 5, 4, 6, 5], 5    => [0, 2, 5]
   */
  findAllOccurrences: function(arr, target) {
    if (!isArrayAndNoZero(arr)) {
      return null;
    }

    const resultArr = [];

    arr.forEach((item, index) => {
      if (item === target) {
        resultArr.push(index);
      }
    });

    return resultArr;
  }
};
