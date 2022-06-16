exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  /**
   * You should be able to use an array as arguments when calling a function.
   *
   * @example
   *   fn, [ 'Hello', 'Ellie', '!' ] => 'Hello, Ellie!'
   *
   */
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  /**
   * You should be able to change the context in which a function is called.
   *
   * @example
   *   fn, {
   *   greeting: 'Hello',
   *   name: 'Rebecca'
   *     } => 'Hello, Rebecca!!!'
   *
   */
  speak: function(fn, obj) {
    return fn.bind(obj, '!!!')();
  },

  /**
   * You should be able to return a function from a function.
   *
   * @example
   *   functionFunction('Hello')('world') => 'Hello, world'
   *
   */
  functionFunction: function(str) {
    return function(str2) {
      return `${str}, ${str2}`;
    }
  },

  /**
   * You should be able to use closures.
   *
   */
  makeClosures: function(arr, fn) {
    const fns = [];

    arr.forEach(item => fns.push(() => fn(item)));

    return fns;
  },

  /**
   * You should be able to create a "partial" function.
   *
   */
  partial: function(fn, str1, str2) {
    return str3 => fn(str1, str2, str3);
  },

  /**
   * You should be able to use arguments.
   *
   */
  useArguments: function() {
    return [...arguments].reduce((res, item) => res += item);
  },

  /**
   * You should be able to apply functions with arbitrary numbers of arguments.
   *
   */
  callIt: function(fn) {
    const arr = [...arguments].slice(1, arguments.length);

    return fn(...arr);
  },

  /**
   * You should be able to create a "partial" function for variable number of applied arguments.
   *
   */
  partialUsingArguments: function(fn) {
    const arr = [...arguments].slice(1, arguments.length);

    return (...arguments) => fn(...arr, ...arguments);
  },

  /**
   * You should be able to curry existing functions.
   *
   */
  curryIt: function(fn) {
    return a => b => c => fn(a, b, c);
  }
};
