(function() {
  'use strict';

  var Converter = function(trinary) {
    this.trinary = trinary;
  };

  Converter.prototype.toDecimal = function() {
    if (invalid(this.trinary)) { return 0; }

    var powers = powersOfThree(this.trinary);
    var reversed = reversedDigits(this.trinary);

    var sum = 0;
    for (var i = 0; i < powers.length; i++) {
      sum += powers[i] * parseInt(reversed[i]);
    }
    return sum;
  };

  function powersOfThree(trinary) {
    var powers = [];
    for (var i = 0; i < trinary.length; i++) {
      powers.push(Math.pow(3, i));
    }
    return powers;
  };

  function reversedDigits(trinary) {
    return trinary.split('').reverse();
  };

  function invalid(trinary) {
    return trinary.match(/\D+/g);
  };

  module.exports = Converter;
})();