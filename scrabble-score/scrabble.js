(function() {
  'use strict';

  var Scrabble = function() {};

  Scrabble.score = function(word) {
    if (word === null) { return 0; }

    var score = 0;
    var letters = word.split('');

    for(var s in tileScores) {
      for (var letter in letters) {
        var thisLetter = letters[letter].toUpperCase();
        if (tileScores[s].indexOf(thisLetter) !== -1) {
          score += parseInt(s);
        }
      }
    }
    
    return score;
  };

  var tileScores = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
  };

  module.exports = Scrabble;
})();