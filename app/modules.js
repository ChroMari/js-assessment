exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  /**
   * You should be able to create a function that returns a module.
   *
   * @example
   *   'hello', 'matt' => {
   *     name: matt,
   *     greeting: hello,
   *     sayIt: () {
   *       'hello, matt'
   *     }
   *   }
   *
   */
  createModule: function(str1, str2) {
    return ({
      name: str2,
      greeting: str1,
      sayIt: function () {
        return `${this.greeting}, ${this.name}`;
      }
    });
  }
};
