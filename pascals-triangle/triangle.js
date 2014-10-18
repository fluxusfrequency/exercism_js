(function() {
  'use strict';

  var Triangle = function(input) {
    this.rows = generateRows(input);
    this.lastRow = this.rows[this.rows.length - 1];
  };

  function generateRows(max) {
    var i, j, collector, inner, last, sum;
    collector = [];
    i = 0;
    last = [0];

    while (i < max) {
      inner = [];
      for (j = 0; j < i + 1; j++) {
        if (j === 0 || j === i) {
          sum = 1;
        } else {
          sum = (last[j]) + (last[j - 1]);
        }
        inner.push(sum);
      }
      collector.push(inner);
      last = inner;
      i++;
    }
    return collector;
  }

  module.exports = Triangle;
})();
