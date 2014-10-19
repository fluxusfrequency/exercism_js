module.exports = function(args) {
  var words = args.split(/\s/);

  return words.reduce(function(counts, word) {
    var thisCount = counts[word] || 0;
    counts[word] = thisCount + 1;
    return counts;
  }, {});
};
