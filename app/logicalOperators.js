exports = typeof window === 'undefined' ? global : window;

exports.logicalOperatorsAnswers = {
  /**
   * You should be able to work with logical or.
   *
   */
  or: function(a, b) {
    return a || b;
  },

  /**
   * You should be able to work with logical and.
   *
   */
  and: function(a, b) {
    return a && b;
  }
};
