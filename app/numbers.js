exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  /**
   * You should be able to find the value of a given bit.
   *
   * @example
   *    128, 8 => 1
   */
  valueAtBit: function(num, bit) {
    if (typeof num !== 'number') return null;

    const strTwo = num.toString(2);
    const len = strTwo.length;

    return bit > len ? 0 : Number(strTwo[len - bit]);
  },

  /**
   * You should be able to return the base10 representation of a binary string.
   *
   * @example
   *   '11000000' => 192
   */
  base10: function(str) {
    return parseInt(str, 2);
  },

  /**
   * You should be able to convert an eight-bit number to a binary string.
   *
   * @example
   *   128 => '10000000'
   */
  convertToBinary: function(num) {
    if (typeof num !== 'number') return null;

    const numTwo = num.toString(2);

    return '0'.repeat(8 - numTwo.length) + num.toString(2);
  },

  /**
   * You should be able to multiply with precision.
   *
   * @example
   *   3, 0.1 => 0.3
   */
  multiply: function(a, b) {
    const strTen = (a * b).toFixed(10);
    return Number(strTen);
  }
};
