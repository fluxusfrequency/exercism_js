(function() {
  'use strict';

  var Raindrops = function() {};

  Raindrops.prototype.convert = function(drops) {
    var factors = findFactors(drops);

    if (factors.length > 0) {
      return joinSounds(factors);
    } else {
      return drops.toString();
    }
  };

  function findFactors(drops) {
    var factors = [];
    for (var s in Sounds) {
      if (drops % s === 0) {
        factors.push(s);
      }
    }
    return factors;
  }

  function joinSounds(factors) {
    var result = [];
    for (var f in factors) {
      var factor = factors[f];
      result.push(Sounds[factor]);
    }
    return result.join("");
  }

  var Sounds = {
    3: "Pling",
    5: "Plang",
    7: "Plong"
  };

  module.exports = Raindrops;
})();