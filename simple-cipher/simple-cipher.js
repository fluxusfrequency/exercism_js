function generateAlphabet() {
  var letters = [];
  for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    letters.push(String.fromCharCode(i));
  }
  return letters;
};

var ALPHABET = generateAlphabet();

var Cipher = function(key) {
  this._validateKey(key);
  this.key = key || 'aaaaaaaaaa';
  this.keyDistances = this._keyDistances();
};

Cipher.prototype.encode = function(message) {
  return this._process(message, 'encode');
};

Cipher.prototype.decode = function(message) {
  return this._process(message, 'decode');
};

Cipher.prototype._validateKey = function(key) {
  if (key && key.toUpperCase() === key || key === '') {
    throw(new Error('Bad key'));
  }
};

Cipher.prototype._process = function(message, type) {
  var processed = [],
      chars = message.split('');

  for(var i = 0, max = chars.length; i < max; i++) {
    var c = chars[i],
        distance = this.keyDistances[i],
        rotated = this._rotate(type, distance);

    processed.push(rotated[c]);
  }

  return processed.join('');
};

Cipher.prototype._keyDistances = function() {
  return this.key.split('').map(this._calculateDistance);
};

Cipher.prototype._calculateDistance = function(char) {
  return char.charCodeAt(0) - 'a'.charCodeAt(0);
};

Cipher.prototype._rotate = function(direction, distance) {
  if (direction === 'encode') {
    return this._rotateCharacters(distance);
  } else {
    return this._rotateCharacters(-distance);
  }
};

Cipher.prototype._rotateCharacters = function(distance) {
  var rotations = {};

  for(var i = 0; i < 26; i++) {
    var j = (i + distance) % 26;
    rotations[ALPHABET[i]] = ALPHABET[j];
  }
  return rotations;
};

module.exports = Cipher;
