(function() {
  'use strict';

  var Series = function(series) {
    this.series = series;
    this.digits = this.digits();
  };

  Series.prototype.digits = function() {
    return this.series.split('').map(function(n) {
      return parseInt(n);
    });
  };

  Series.prototype.slices = function(s) {
    var all = this.digits;
    var result = [];
    for (var i = 0; i < all.length; i++) {
      var inner = [];
      for (var j = 0; j < s; j++) {
        inner.push(all[i + j]);
      }
      if (inner.indexOf(undefined) === -1) {
        result.push(inner);
      }
    }
    return result;
  };

  Series.prototype.largestProduct = function(n) {
    if (n === 0) { return 1; }
    if (n > this.digits.length) { throw "Slice size is too big."; }
    
    var slices = this.slices(n);
    var winner = 0;
    for (var i = 0; i < slices.length; i++) {
      var thisSlice = slices[i];
      var product = 1;
      for(var j = 0; j < thisSlice.length; j++) {
        product *= thisSlice[j];
      }
      winner = (winner < product) ? product : winner;
    }
    return winner;
  };

  module.exports = Series;
})();