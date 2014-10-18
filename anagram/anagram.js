var Anagram = function(input) {
  this.input = input.toLowerCase();
};

Anagram.prototype.match = function(word_array) {
  var sorted_input = sort_letters_in_word(this.input);
  var matches = [];

  for (var word in word_array) {
    var sorted_word = sort_letters_in_word(word_array[word].toLowerCase());
    if (sorted_input === sorted_word && word_array[word].toLowerCase() !== this.input) {
      matches.push(word_array[word]);
    };
  }
  
  return matches;
};

var sort_letters_in_word = function(phrase) {
  var chars = phrase.split("");
  var sorted_chars = chars.sort();
  var sorted_phrase = sorted_chars.join("");
  return sorted_phrase;
};

module.exports = Anagram;