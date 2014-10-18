(function() {
  'use strict';

  var Binary = function(decimal) {
    this.decimal = decimal;
  };

  Binary.prototype.toDecimal = function() {
    if (isNaN(this.decimal)) { return 0; }
    
    var sum = 0;
    var powers = powersOfTwo(this.decimal);
    for (var i = 0; i < powers.length; i++) {
      var thisDigit = parseInt(this.decimal.split('')[i]);
      sum += (powers[i]*thisDigit);
    }
    return sum;
  };

  function powersOfTwo(decimal) {
    var powers = [];
    for(var i = decimal.length - 1; i >= 0; i--) {
      powers.push(Math.pow(2, i));
    }
    return powers;
  }

  module.exports = Binary;
})();