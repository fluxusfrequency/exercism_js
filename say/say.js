module.exports = {
  ONES: {
    0: 'zero',
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

  TENS: {
    10: 'ten',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  },

  inEnglish: function(n) {
    if (n >= 100) { return this._handleOneHundredPlus(n); }
    if (n > 20) { return this._handleTwentyPlus(n); }
    return this.ONES[n] || this.TEENS[n] || this.TENS[n];
  },

  _handleOneHundredPlus: function(n) {
    var hundredsPlace = Number(n.toString().slice(-3, 1));
    var tensAndOnes = Number(n.toString().slice(-2));
    return [this.ONES[hundredsPlace], 'hundred'].join(' ') + this.inEnglish(tensAndOnes);
  },

  _handleTwentyPlus: function(n) {
    var tensPlace;
    var i = 0;
    var tens = Object.keys(this.TENS).reverse();
    while (i < tens.length) {
      var number = Number(n.toString().slice(-2) + '0');
      if (number % tens[i] === 0) {
        tensPlace = tens[i];
        break;
      }
      i++;
    }
    return [this.TENS[tensPlace], this.ONES[Number(n.toString().slice(-1))]].join('-');
  }
};
