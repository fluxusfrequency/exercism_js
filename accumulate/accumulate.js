(function() {
  'use strict';

  Array.prototype.accumulate = function(callback){
    return this.map(callback);
  };

  module.exports = Array;
})();