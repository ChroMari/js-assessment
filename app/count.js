exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  /**
   * Should count from start number to end number, one per 1/10th of a second.
   * Should provide a method to cancel the counting.
   *
   */
  count: function (start, end) {
    console.log(start);

    const idTimer = setTimeout(() => {
      let count = 1;

      for (let i = start + 1; i <= end; i++) {
        setTimeout(()=>{
          console.log(i);
        }, 100 * count);

        count++;
      }
    },0);

    this.cancel = function() {
      clearTimeout(idTimer);
    };

    return this;
  }
};
