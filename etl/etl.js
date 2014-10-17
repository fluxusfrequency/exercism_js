(function(){
  'use strict';

  var ETL = function(rack) {
    var letterScores = {};

    for (var score in rack) {
      rack[score].forEach(function(letter) {
        letterScores[letter.toLowerCase()] = parseInt(score);
      });
    }

    return letterScores;
  };

  module.exports = ETL;
})();
