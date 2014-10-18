(function() {
  'use strict';
  
  var Grains = function() {};

  Grains.prototype.square = function (input) {
    return Math.pow(2, (input - 1));
  };

  Grains.prototype.total = function() {
    var sum = 0;
    for (var i = 64; i > 0; i--) {
      sum += this.square(i);
    }
    return sum;
  };

  module.exports = Grains;

})();