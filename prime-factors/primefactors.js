(function(){
  'use strict';

  var Prime = {};

  Prime.for = function(number) {
    var factors = [];
    var i = 2;

    while (i <= number) {
      while (number % i === 0) {
        factors.push(i);
        number /= i;
      }
      i += 1;
    }
    
    return factors;
  };

  module.exports = Prime;
})();