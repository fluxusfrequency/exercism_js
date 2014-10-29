(function() {
  'use strict';

  var MATCHES = {
    '{': '}',
    '[': ']',
    '(': ')',
    '}': '{',
    ']': '[',
    ')': '('
  };

  var bracketPush = function(input) {
    var brackets = input.split('');
    var counts = countBrackets(brackets);
    var uniqueBrackets = Object.keys(counts);
    return checkClosingBrackets(uniqueBrackets, counts);
  };

  var countBrackets = function(brackets) {
    var counts = {};
    brackets.forEach(function(bracket) {
      counts[bracket] = counts[bracket] || 0;
      counts[bracket]++;
    });
    return counts;
  };

  var checkClosingBrackets = function(uniqueBrackets, counts) {
    var result = true;
    uniqueBrackets.forEach(function(bracket) {
      var matcher = MATCHES[bracket];
      if (!counts[matcher]) { result = false; }
    });
    return result;
  };

  module.exports = bracketPush;
})();
