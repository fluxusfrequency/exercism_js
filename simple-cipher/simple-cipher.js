var Cipher = function() {
  this.key = 'aaaaaaaaaa';
};

Cipher.prototype.encode = function(message) {
  return this._process(message, 'encode');
};

Cipher.prototype.decode = function(message) {
  return this._process(message, 'decode');
};

Cipher.prototype._process = function(message, type) {
  var rotated = [],
      chars = message.split(''),
      distances = this._keyDistances();
  for(var i = 0, max = chars.length; i < max; i++) {
    var char = chars[i];
  }
};

Cipher.prototype._keyDistances = function() {
  return this.key.split('').map(this._calculateDistance);
};

Cipher.prototype._calculateDistance = function(char) {
  return char.charCodeAt(0) - 'a'.charCodeAt(0);
};


module.exports = Cipher;
