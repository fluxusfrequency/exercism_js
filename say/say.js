module.exports = {
  ONES: {
    0: null,
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  },

  TENS: {
    0: null,
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  },

  TEENS: {
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  },

  inEnglish: function(n) {
    this._validate(n);
    if (n === 0) { return 'zero'; }
    if (10 <= n && n <= 19) { return this.TEENS[n]; }
    return this._translateNumbers(n).join('').trim();
  },

  _validate: function(n) {
    if (n < 0 || n > 999999999999) {
      throw new Error('Number must be between 0 and 999,999,999,999.');
    }
  },

  _translateNumbers: function(n) {
    var self = this;
    var collector = [];
    var allNumbers = this._numbersToTranslate(n);
    var i = 0;
    while(i <= allNumbers.length) {
      var inner = [];
      var onesPlace = allNumbers[i];
      var tensPlace = allNumbers[i + 1];
      var hundredsPlace = allNumbers[i + 2];

      if(this.ONES[hundredsPlace]) {
        inner.push(this.ONES[hundredsPlace] || '');
        inner.push(' hundred');
      }
      if(this.ONES[hundredsPlace] && this.TENS[tensPlace]) {
        inner.push(' ');
      }
      if(this.TENS[tensPlace]) {
        inner.push(this.TENS[tensPlace] || '');
      }
      if(this.TENS[tensPlace] && this.ONES[onesPlace]) {
        inner.push('-');
      }
      if(this.ONES[onesPlace]) {
        inner.push(this.ONES[onesPlace] || '');
      }

      var j = allNumbers.indexOf(onesPlace);
      var places = self._addPlaces(j);
      places.forEach(function(place) {
        collector.unshift(place);
      });
      collector.unshift(inner.join(''));
      i += 3;
    }
    return collector;
  },

  _numbersToTranslate: function(n) {
    return n.toString().split('').reverse().map(function(char) {
      return Number(char);
    });
  },

  _addPlaces: function(i) {
    var result = [];
    if(8 <= i && i <= 10) {
      result.push(' billion ');
    }
    if(5 <= i && i <= 7) {
      result.push(' million ');
    }
    if(2 <= i && i <= 4) {
      result.push(' thousand ');
    }
    return result;
  }

};
