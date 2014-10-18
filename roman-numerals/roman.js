(function() {
  var Num = function(){};

  Num.toRoman = function(number) {
    var remainder = number;
    var roman = "";
    for (var n in arabicNumerals) {
      var digitCount = Math.floor(remainder / arabicNumerals[n]);
      roman += romanNumerals[n].repeat(digitCount);
      remainder %= arabicNumerals[n];
    }
    return roman;
  };

  var arabicNumerals = [
    1000,
    900,
    500,
    400,
    100,
    90,
    50,
    40,
    10,
    9,
    5,
    4,
    1
  ];

  var romanNumerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  String.prototype.repeat = function( num ) {
    return new Array( num + 1 ).join( this );
  };

  module.exports = Num;
})();