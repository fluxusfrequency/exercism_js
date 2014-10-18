(function(){
  'use strict';

  var Luhn = function(numbers) {
    this.numbers = numbers;
    this.addends = this.findAddends();
    this.checkDigit = this.checksum();
  };

  Luhn.prototype.checksum = function() {
    var sum = 0;
    for (var i = this.addends.length - 1; i >= 0; i--) {
      sum += this.addends[i];
    }
    return sum;
  };

  Luhn.prototype.findAddends = function() {
    var splitAndFlipped = splitAndFlip(this.numbers);
    var doubled = doubleEveryOther(splitAndFlipped);
    return processFlipped(doubled);
  };

  Luhn.prototype.valid = function() {
    return (this.checksum % 10) === 0;
  };

  Luhn.create = function(number) {
    var test = new Luhn(number);
    if (test.valid()) {
      return number;
    } else {
      return Luhn.findCheck(number);
    }
  };

  Luhn.findCheck = function(num) {
    for (var i = 0; i < 10; i++) {
      var test = new Luhn(num*10*i);
      if (test.valid()) {
        return test.numbers;
      }
    }
  };

  function splitAndFlip(numbers) {
    var split = numbers.toString().split('').reverse();
    var result = [];
    for (var i = split.length - 1; i >= 0; i--) {
      result.push(parseInt(split[i]));
    }
    return result;
  };

  function doubleEveryOther(collection) {
    var result = collection;
    for (var i = 0; i < result.length; i++) {
      if (i % 2 !== 0) {
        result[i] = (result[i] * 2);
      }
    }
    return result;
  };

  function processFlipped(collection) {
    var result = [];
    for (var i = collection.length; i >=0; i--) {
      if (collection[i] >= 10) {
        result.push(collection[i] - 9);
      } else {
        result.push(collection[i]);
      }
    }
    return result;
  };

  module.exports = Luhn;
})();