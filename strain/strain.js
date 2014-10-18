(function() {
  'use strict';

  var Strain = function() {};

  Strain.keep = function(collection, callback) {
    var results = [];
    for (var i = collection.length - 1; i >= 0; i--) {
      if (callback(collection[i])) {
        results.unshift(collection[i]);
      }
    }
    return results;
  };

  Strain.discard = function(collection, callback) {
    var results = [];
    for (var i = collection.length - 1; i >= 0; i--) {
      if (!callback(collection[i])) {
        results.unshift(collection[i]);
      }
    }
    return results;
  };

  module.exports = Strain;
})();