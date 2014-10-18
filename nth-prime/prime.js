(function() {
  'use strict';

  var Prime = function() {};

  Prime.nth = function(index) {
    if (index === 0) { throw "Prime is not possible"; }
    
    var i = 0;
    var k = 0;
    while (k <= index) {
      if (this.checkPrime(i)) { k++; }
      i++;
    }
    return i - 1;
  };

  Prime.checkPrime = function(n) {
    if (n === 1) { return false; }
    if (n < 4) { return true; }
    if (n % 2 === 0) { return false; }

    var i = 3;
    while (i < (n * 0.5 + 1)) {
      if (n % i === 0) { return false; }
      i += 2;
    }
    return true;
  };


  module.exports = Prime;
})();