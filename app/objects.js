exports = typeof window === 'undefined' ? global : window;

const isObject = (obj) => typeof obj === 'object';

exports.objectsAnswers = {
  /**
   * You should be able to alter the context in which a method runs.
   *
   */
  alterContext: function(fn, obj) {
    if (!isObject(obj)) return null;

    return fn.bind(obj)();
  },

  /**
   * You should be able to alter multiple objects at once.
   *
   */
  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  /**
   * You should be able to iterate over an object's "own" properties.
   *
   */
  iterate: function(obj) {
    if (!isObject(obj)) return null;

    const result = [];

    for (const [key, value] of Object.entries(obj)) {
      result.push(`${key}: ${value}`);
    }

    return result;
  }
};
