module.exports = function(list, callback) {
  var accumulated = [];
  list.forEach(function(element) {
    accumulated.push(callback(element));
  });
  return accumulated;
};
