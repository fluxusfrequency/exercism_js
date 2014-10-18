(function() {
  'use strict';

  var Palindrome = function(options) {
    this.max = options['maxFactor'];
    this.min = options['minFactor'] || 1;
    this.palindromes = this.generate();
  };

  Palindrome.prototype.generate = function() {
    var palindromes = [];
    for (var i = this.min; i <= this.max; i++) {
      for (var j = this.min; j <= this.max; j++) {
        var product = (i * j);
        if (this.isPalindrome(product)) {
          palindromes.push(product);
        }
      }
    }
    return palindromes;
  };

  Palindrome.prototype.uniqueFactors = function(value) {
    var starting = this.findFactors(value);
    var sorted = [];
    for (var i = 0; i < starting.length; i++) {
      sorted.push(starting[i].sort());
    }
    return sorted.unique();
  };

  Palindrome.prototype.findFactors = function(value) {
    var results = [];
    for (var i = 1; i <= value; i++) {
      if (value % i === 0) {
        results.push([i, (value / i)]);
      }
    }
    return results;
  };

  Palindrome.prototype.isPalindrome = function(number) {
    var digits = number.toString().split('');
    var halfLength = (digits.length / 2);
    var half1 = digits.slice(0, halfLength);
    var half2 = digits.slice(halfLength - 1, digits.length);
    return arrayEqual(half1, half2.reverse());
  };

  var arrayEqual = function(a, b) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  };

  Palindrome.prototype.largest = function() {
    var that = this;
    var generated = this.palindromes;
    var biggest = 0;
    for (var i = 0; i < generated.length; i++) {
      if (generated[i] > biggest) {
        biggest = generated[i];
      }
    }
    var theseFactors = this.uniqueFactors(biggest).filter(function(pair) {
      return pair.every(function(factor) {
        return that.min <= factor && factor <= that.max;
      });
    });
    return {
      value: biggest,
      factors: theseFactors
    };
  };

  Palindrome.prototype.smallest = function() {
    var that = this;
    var generated = this.palindromes;
    var smallest = generated[0];
    for (var i = 0; i < generated.length; i++) {
      if (generated[i] < smallest) {
        smallest = generated[i];
      }
    }
    var theseFactors = this.uniqueFactors(smallest).filter(function(pair) {
      return pair.every(function(factor) {
        return that.min <= factor && factor <= that.max;
      });
    });
    return {
      value: smallest,
      factors: theseFactors
    };
  };

  Array.prototype.unique = function() {
    var collector = {};
    var output = [];
    for (var i = 0; i < this.length; i ++) {
      collector[this[i]] = this[i];
    }
    for (var o in collector) {
      output.push(collector[o]);
    }
    return output;
  };

  module.exports = Palindrome;
})();