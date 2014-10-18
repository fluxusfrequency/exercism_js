(function(){
  'use strict';

  function WordProblem(question) {
    this.question = question;
  }

  WordProblem.prototype.answer = function() {
    if (!this.isValid()) {
      throw new ArgumentError("Problem is invalid.");
    }
    var numbers = this.problemNumbers();
    var operators = this.operatorWords();
    var sum = 0;
    for (var o = 0; o < operators.length; o++) {
      if (o === 0) {
        sum = this.translate(parseInt(numbers[o], 10), operators[o], parseInt(numbers[o+1], 10));
      } else {
        sum = this.translate(sum, operators[o], parseInt(numbers[o+1], 10));
      }
    }
    return sum;
  };

  WordProblem.prototype.translate = function(first, operation, second) {
    if (operation === "plus") {
      return first + second;
    } else if (operation === "minus") {
      return first - second;
    } else if (operation === "multiplied") {
      return first * second;
    } else {
      return first / second;
    }
  };

  WordProblem.prototype.operatorWords = function() {
    var i, words, result;
    words = this.problemWords(this.problem);
    result = [];
    for (i = 0; i < words.length; i++) {
      if(operators.indexOf(words[i]) !== -1) {
        result.push(words[i]);
      }
    }
    return result;
  };

  WordProblem.prototype.problemWords = function() {
    return this.question.split(" ");
  };

  WordProblem.prototype.problemNumbers = function() {
    return this.question.match(/\-?\d+/g);
  };

  WordProblem.prototype.isValid = function() {
    var words = this.problemWords();
    for (var i = 0; i < operators.length; i++) {
      if (words.indexOf(operators[i]) !== -1) {
        return true;
      }
    }
    return false;
  };

  var operators = [
    "plus",
    "minus",
    "multiplied",
    "divided"
  ];

  exports.WordProblem = WordProblem;
  exports.ArgumentError = ArgumentError;

  function ArgumentError() {};
  ArgumentError.prototype = new Error();


})();