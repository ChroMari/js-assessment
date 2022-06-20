exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  /**
   * You should understand how to use promises to handle asynchronicity.
   *
   */
  async: function(value) {
    return new Promise(function(resolve, _) {
      return resolve(value);
    });
  },

  /**
   * You should be able to retrieve data from the server and return a sorted array of names.
   *
   */
  manipulateRemoteData: function(url) {
    if (typeof url !== 'string' || url.length === 0) return null;

    return fetch(url)
      .then(response => response.json())
      .then(({people}) => {
        const names = people.map(data => data.name);

        return names.sort();
      });
  }
};
