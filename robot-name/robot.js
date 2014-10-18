(function() {
  'use strict';

  var NUMBERS = '0123456789';
  var LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var Robot = function() {
    this.reset();
  };

  Robot.prototype.reset = function() {
    this.name = generateName();
  };

  function generateName() {
    var result = '';
    for (var i = 6; i > 0; i--) {
      if (i < 4) {
        result += addCharsToName(NUMBERS, result);
      } else {
        result += addCharsToName(LETTERS, result);
      }
    }
    return result;
  }

  function addCharsToName(chars) {
    return chars[Math.round(Math.random() * (chars.length - 1))];
  }

  module.exports = Robot;

})();
