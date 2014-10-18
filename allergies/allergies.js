(function() {
  'use strict';

  var Allergies = function(score) {
    this.score = validateScore(score);
  }

  Allergies.prototype.allergicTo = function(substance) {
    return this.list().indexOf(substance) !== -1;
  }

  Allergies.prototype.list = function(){
    for (var s in AllergyScores) {
      if (parseInt(s) === this.score) {
        return [AllergyScores[s]];
      }
    }

    return findAllergiesFromScore(this.score);
  }

  function findAllergiesFromScore(score) {
    var allergies = [];
    var remainder = score;
    var all = Object.keys(AllergyScores);

    for (var i = all.length - 1; i >= 0; i--) {
      if (remainder <= 0) {break;}

      if (parseInt(all[i]) <= remainder) {
        allergies.push(AllergyScores[all[i]]);
        remainder -= parseInt(all[i]);
      }
    }

    return allergies.reverse();
  }

  function validateScore(score) {
    while (score > 255) {
      score -= 256;
    }
    return score;
  }

  var AllergyScores = {
    "128":"cats",
    "64":"pollen",
    "32":"chocolate",
    "16":"tomatoes",
    "8":"strawberries",
    "4":"shellfish",
    "2":"peanuts",
    "1":"eggs"
  }

  module.exports = Allergies;
})();