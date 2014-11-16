var Luhn = function(input) {
  this.number = input;
  this.digits = this.number.toString().split('');
  this.checkDigit = this.checkDigit();
  this.addends = this.addends();
  this.checksum = this.checksum();
  this.valid = this.valid();

};

Luhn.create = function(number) {
  if (new Luhn(number).valid) {
    return number;
  } else {
    return this.findCheck(number);
  }
}

Luhn.findCheck = function(number) {
  for (var i = 0; i <= 9; i++) {
    var test = new Luhn(number * 10 + i);
    if (test.valid) {
      return test.number
    }
  }
}

Luhn.prototype.addends = function() {
  var self = this;
  var collector = [];
  this.digits.reverse().forEach(function(digit, i) {
    console.log(digit);
    if (self.isEven(i)) {
      collector.push(Number(digit));
    } else {
      var candidate = Number(digit * 2);
      collector.push(self.correctIfOverTen(candidate));
    }
  });
  return collector.reverse()
};

Luhn.prototype.checksum = function() {
  return this.addends.reduce(function(x, y) {
    return x + y;
  });
};

Luhn.prototype.valid = function() {
  return this.checksum % 10 === 0;
};

Luhn.prototype.isEven = function(index) {
  return (index + 2) % 2 === 0;
};

Luhn.prototype.correctIfOverTen = function(n) {
  if (n >= 10) {
    n -= 9;
  }
  return n;
};

Luhn.prototype.checkDigit = function() {
  return parseInt((this.digits)[this.digits.length - 1]);
};

module.exports = Luhn;
