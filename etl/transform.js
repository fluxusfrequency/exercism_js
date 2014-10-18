(function(){
  'use strict';

  module.exports = {
    transform: function(oldScores) {
      return Object.keys(oldScores).reduce(function(newScores, score) {
        oldScores[score].forEach(function(word) {
          newScores[word.toLowerCase()] = Number(score);
        });
        return newScores;
      }, {});
    }
  };
})();
