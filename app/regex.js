exports = typeof window === 'undefined' ? global : window;

const isString = (str) => typeof str === 'string';

exports.regexAnswers = {
  /**
   * You should be able to square each number in an array.
   *
   * @example
   *   'abc123' => true
   *   'acd'    => false
   */
  containsNumber: function(str) {
    if (!isString(str)) return null;

    const number = /\d+/.exec(str);

    return number != null;
  },

  /**
   * You should be able to detect a repeating letter in a string.
   *
   * @example
   *   'ZEPPELIN' => true
   *   'cats'     => false
   */
  containsRepeatingLetter: function(str) {
    if (!isString(str)) return null;

    return (/([a-z]).*?\1/i).test(str);
  },

  /**
   * You should be able to determine whether a string ends with a vowel (aeiou).
   *
   * @example
   *   'cats'    => false
   *   'gorilla' => true
   */
  endsWithVowel: function(str) {
    if (!isString(str)) return null;

    const endStr = /[aeiou]$/i.exec(str);

    return endStr != null;
  },

  /**
   * You should be able to capture the first series of three numbers.
   *
   * @example
   *   '9876543' => '987'
   *   'abcdef'  => false
   */
  captureThreeNumbers: function(str) {
    if (!isString(str)) return false;

    const number = /[0-9]{3}/g.exec(str);

    return (number != null) ? number[0] : false;
  },

  /**
   * You should be able to determine whether a string matches a pattern.
   *
   * @example
   *   '451-933-7899' => true
   *   '33-444-5555'  => false
   */
  matchesPattern: function(str) {
    if (!isString(str)) return null;

    const reg = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    return reg.test(str);
  },

  /**
   * You should be able to detect correctly-formatted monetary amounts in USD.
   *
   * @example
   *   '$459,049,393.21' => true
   *   '34,344.34'       => false
   */
  isUSD: function(str) {
    if (!isString(str)) return null;

    const strInt = /^\$[0-9]{1,3},[0-9]{3},[0-9]{3}$/.test(str);
    const strFloat = /^\$[0-9]{1,3}(,[0-9]{3})*\.[0-9]{2}$/.test(str);

    return strInt ? true : strFloat;
  }
};
