var Words = function(args) {
  this.args = args;
  this.words = this.args.split(" ");
  this.count = this.count_words();
};

Words.prototype.count_words = function() {
  var counts = {};

  this.words.forEach(function(word, i, words){
    var clean_word = sanitize_word(words[i]);
    if (clean_word && counts[clean_word]) {
      counts[clean_word] += 1;
    } else if (clean_word) {
      counts[clean_word] = 1;
    }
  });
  
  return counts;
};

var sanitize_word = function(word) {
  var cased = word.toLowerCase();
  var sanitized = cased.match(/\w+/);
  return sanitized;
};

module.exports = Words;