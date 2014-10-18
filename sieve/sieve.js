(function() {
  'use strict';

  var Sieve = function(max) {
    this.max = max;
    this.primes = this.findPrimes();
  };

  Sieve.prototype.findPrimes = function() {
    var results = [];
    var range = rangeTo(this.max);

    while (range.length > 0) {
      var n = range.shift(); 
      if(!containsFactor(results, n)) {
        results.push(n);
      }
    }

    return results;
  };

  function rangeTo(max) {
    var r = [];
    for (var i = 2; i <= max; i++) {
      r.push(i);
    }
    return r;
  }

  function containsFactor(collection, divisor) {
    for (var i = 0; i < collection.length; i++) {
      if (divisor % collection[i] === 0) {
        return true;
      }
    }
    return false;
  }

  module.exports = Sieve;
})();