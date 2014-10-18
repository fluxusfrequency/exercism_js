(function() {
  'use strict';

  var Converter = function(octal){
    this.octal = octal;
  };

  Converter.prototype.toDecimal = function() {
    if (invalid(this.octal)) { return 0; }

    var powers = powersOfEight(this.octal);
    var reversed = reversedDigits(this.octal);

    var sum = 0;
    for (var i = 0; i < powers.length; i++) {
      sum += powers[i] * parseInt(reversed[i]);
    }
    return sum;
  };

  function powersOfEight(octal) {
    var powers = [];
    for (var i = 0; i < octal.length; i++) {
      powers.push(Math.pow(8, i));
    }
    return powers;
  };

  function reversedDigits(octal) {
    return octal.split('').reverse();
  };

  function invalid(octal) {
    return octal.match(/\D+/g);
  };

  module.exports = Converter;
})();