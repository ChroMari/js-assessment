exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  /**
   * You should understand how to use promises to handle asynchronicity.
   *
   */
  async: function(value) {
    return new Promise(function(resolve, reject) {
      return resolve(value);
    });
  },

  /**
   * You should be able to retrieve data from the server and return a sorted array of names.
   *
   */
  manipulateRemoteData: function(url) {
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(datas) {
        return datas.people.map(data => data.name).sort();
      });
  }
};
