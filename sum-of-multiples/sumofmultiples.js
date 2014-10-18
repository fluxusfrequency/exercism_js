(function() {
  'use strict';

  var SumOfMultiples = function(factors) {
    return new Multiples(factors);
  };

  function Multiples(factors) {
    this.factors = factors || [3, 5];
  };

  Multiples.prototype.to = function(max) {
    var sum = 0;
    for (var i = 1; i < max; i++) {
      if (isFactor(i, this.factors)) {
        sum += i;
      }
    }
    return sum;
  };

  function isFactor(i, factors) {
    var result = false;
    factors.forEach(function(factor) {
      if (i % factor === 0) {
        result = true;
      }
    });
    return result;
  }

  module.exports = SumOfMultiples;
})();
