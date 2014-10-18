(function() {
  'use strict';

  var CONVERSIONS = {
    'a': 10,
    'b': 11,
    'c': 12,
    'd': 13,
    'e': 14,
    'f': 15
  };

  var Hexadecimal = function(hex) {
    this.hex = hex;
  };

  Hexadecimal.prototype.toDecimal = function() {
    var powers = powersOfSixteen(this.hex);
    var places = this.hex.split('').reverse();
    var sum = 0;
    for (var i = 0; i < powers.length; i++) {
      console.log(places[i])
      if (normalize(places[i]) === undefined) { return 0; }
      sum += (powers[i] * normalize(places[i]));
    } 
    return sum;
  };

  var normalize = function(hexadecimal) {
    if ((/\d+/g).test(hexadecimal)) {
      return parseInt(hexadecimal);
    } else {
      return CONVERSIONS[hexadecimal];
    }
  };

  var powersOfSixteen = function(hex) {
    var powers = [];
    for (var i = 0; i < hex.length; i++) {
      powers.push(Math.pow(16, i));
    }
    return powers;
  }

  module.exports = Hexadecimal;
})();