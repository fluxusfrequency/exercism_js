'use strict';

var Crypto = function(message) {
  this.message = message;
};

Crypto.prototype.normalizePlaintext = function() {
  return this.message.toLowerCase().replace(/\W/g, '');
};

Crypto.prototype.size = function() {
  return Math.ceil(Math.sqrt(this.message.length));
};

Crypto.prototype.plaintextSegments = function() {
  var size = this.size();
  var chunk = new RegExp('.{1,' + size + '}', 'g');
  return this.normalizePlaintext().match(chunk);
};

Crypto.prototype.ciphertext = function() {
  var coll = []
  var segments = this.plaintextSegments();
  var mapSegments = function(i) {
    return segments.map(function(s) {
      return s[i];
    });
  };

  for (var i = 0, max = segments[0].length; i < max; i++) {
    console.log(mapSegments(i));
    console.log(coll);
    coll.push(mapSegments(i).join());
  }
  return coll.join();
};

module.exports = Crypto;
