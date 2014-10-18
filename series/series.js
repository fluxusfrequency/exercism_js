(function(){
  'use strict';

  var Series = function(input) {
    this.series = input;
    this.digits = this.digits();
  };

  Series.prototype.digits = function() {
    var result = [];
    var split = this.series.split('');
    for (var i = 0; i < split.length; i++) {
      result.push(parseInt(split[i], 10));
    }
    return result;
  };

  Series.prototype.slices = function(n) {
    if (this.digits.length < n) {throw "Slice size is too big.";}

    var result = [];
    for (var i = 0; i < (this.digits.length - n) + 1; i++) {
      result.push(this.digits.slice(i, i + n));
    }
    return result;
  };

  module.exports = Series;
})();