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
    if (n === 0) { return 'zero'; }
    if (10 <= n && n <= 19) { return this.TEENS[n]; }
    return this._translateNumbers(n).join('').trim();
  },

  _translateNumbers: function(n) {
    var collector = [];
    var allNumbers = this._numbersToTranslate(n);
    for(var i = 0; i < allNumbers.length; i += 3) {
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

      var i = allNumbers.indexOf(onesPlace);
      this._addPlaces(i).forEach(function(place) {
        collector.unshift(place);
      });
      collector.unshift(inner.join(''));
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
