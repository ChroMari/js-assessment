exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  /**
   * You should be able to return a list of files from the data.
   * You should be able to return a list of files in a subdir.
   *
   */
  listFiles: function(data, dirName) {
    const resultAllFiles = [];

    const getFiles = (dir, files) => {
      files.map(file => {
        if (typeof file === "string") resultAllFiles.push(file);
        else getFiles(file.dir, file.files);
      });
    };

    getFiles(data.dir, data.files);

    if (!dirName) return resultAllFiles;

    return resultAllFiles.filter(file => file.indexOf(dirName) !== -1);
  },

  /**
   * You should be able to return the permutations of an array.
   *
   */
  permute: function(arr) {
    const combinationArrs = (resultArr, currentArr, arr) => {
      if (currentArr.length === arr.length) {
        resultArr.push([...currentArr]);
        return;
      }

      for (let i = 0; i < arr.length; i++) {
        if (!currentArr.includes(arr[i])) {
          combinationArrs(resultArr, [...currentArr, arr[i]],arr);
        }
      }
    }

    const resultArr = [];
    combinationArrs(resultArr, [], arr);

    return resultArr;
  },

  /**
   * You should be able to return the nth number in a fibonacci sequence.
   *
   * @example
   *   2 => 1
   *   6 => 8
   */
  fibonacci: function(n) {
    /*
      Fn = {[(√5 + 1)/2] ^ n} / √5
    */
    const num = (1 + Math.sqrt(5)) / 2;

    return Math.round(Math.pow(num, n) / Math.sqrt(5));
  },

  /**
   * You should be able to return the set of all valid combinations of n pairs of parentheses.
   *
   * @example
   *   3 => ['((()))', '(()())', '(())()', '()(())', '()()()']
   */
  validParentheses: function(n) {
    const allParentheses = [];

    const generateString = (open, close, parentheses) => {
      if (open > close) return;

      if (open === 0 && close === 0) {
        allParentheses.push(parentheses);
      }
      if (open !== 0) {
        generateString(open - 1, close, `${parentheses}(`);
      }
      if (close !== 0) {
        generateString(open, close - 1, `${parentheses})`);
      }
    }

    generateString(n, n, '');

    return allParentheses;
  }
};
