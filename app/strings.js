exports = typeof window === 'undefined' ? global : window;

const isString = (str) => typeof str === 'string';
const isNumber = (num) => typeof num === 'number';

exports.stringsAnswers = {
  /**
   * You should be able to reduce duplicate characters to a desired minimum.
   *
   * @example
   *   'xaaabbbb' => 'xaabb'
   *   'aaaabbbb' => 'ab'
   */
  reduceString: function(str, amount) {
    if (!isString(str) && !isNumber(amount)) return null;

    let resultStr = '';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
      if (resultStr[resultStr.length - 1] !== str[i]) {
        count = 1;
        resultStr += str[i];
      } else if (resultStr[resultStr.length - 1] === str[i] && count < amount) {
        count += 1;
        resultStr += str[i];
      }
    }

    return resultStr;
  },

  /**
   * You should be able to wrap lines at a given number of columns, without breaking words.
   *
   * @example
   *   'abcdef abcde abc def' => 'abcdef\nabcde\nabc\ndef'
   */
  wordWrap: function(str, cols) {
    if (!isString(str) && !isNumber(cols)) return null;

    const arr = str.split(' ');
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if(arr[i].length > cols || result.length + arr[i].length > cols) {
        result += '\n' + arr[i];
      } else {
          result += ' ' + arr[i];
      }
    }

    return result;
  },

  /**
   * You should be able to reverse a string.
   *
   * @example
   *   'i am a string of characters' => 'sretcarahc fo gnirts a ma i'
   */
  reverseString: function(str) {
    if (!isString(str)) return null;

    return str.split('').reverse().join('');
  }
};
