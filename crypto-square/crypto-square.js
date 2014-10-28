'use strict';

var Crypto = function(message) {
  this.message = message;
};

Crypto.prototype.normalizePlaintext = function() {
  return this.message.toLowerCase().replace(/\W/g, '');
};

Crypto.prototype.size = function() {
  return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
};

Crypto.prototype.plaintextSegments = function() {
  return this.normalizePlaintext().match(this._chunk());
};

Crypto.prototype.ciphertext = function() {
  var coll = [];
  var segments = this.plaintextSegments();
  var mapSegments = function(i) {
    return segments.map(function(s) {
      return s[i];
    });
  };

  for (var i = 0, max = segments[0].length; i < max; i++) {
    coll.push(mapSegments(i).join(''));
  }
  return coll.join('');
};

Crypto.prototype.normalizeCiphertext = function() {
  var text = this.ciphertext();
  return text.match(this._chunk()).join(' ');
};

Crypto.prototype._chunk = function() {
  return new RegExp('.{1,' + this.size() + '}', 'g');
};

module.exports = Crypto;
