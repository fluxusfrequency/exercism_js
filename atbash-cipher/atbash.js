(function(){
  'use strict';

  var Atbash = function() {};

  Atbash.encode = function(input) {
    var chars = input.split('');
    var encoded = [];

    for(var c in chars) {
      var thisChar = chars[c];
      if (this.numbers.indexOf(thisChar) !== -1) {
        encoded.push(thisChar);
      } else {
        var prev = this.alphabet.indexOf(thisChar.toLowerCase());
        encoded.push(this.alphabet.split('').reverse()[prev]);
      }
    };

    return encoded.join('').chunk(5).join(" ");
  };

  Atbash.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  Atbash.numbers = '0123456789';

  String.prototype.chunk = function(n) {
      var result = [];

      for(var i = 0; i < this.length; i += n) {
         result.push(this.substr(i, n));
      }

      return result;
  };

  module.exports = Atbash;
})();