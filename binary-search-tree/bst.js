(function() {
  'use strict';

  var Bst = function(data){
    this.data = data;
  };

  Bst.prototype.insert = function(new_data) {
    if (new_data <= this.data) {
      this.insert_left(new_data);
    } else {
      this.insert_right(new_data);
    }
  };

  Bst.prototype.insert_left = function(new_data) {
    if (this.left) {
      this.left.insert(new_data);
    } else {
      this.left = new Bst(new_data);
    }
  };

  Bst.prototype.insert_right = function(new_data) {
    if (this.right) {
      this.right.insert(new_data);
    } else {
      this.right = new Bst(new_data);
    }
  };

  Bst.prototype.each = function(callback) {
    this.left && this.left.each(callback);
    callback.call(this, this.data);
    this.right && this.right.each(callback);
  };

  Bst.prototype.all = function() {
    var result = [];
    this.left && result.push(this.left.all());
    result.push(this.data);
    this.right && result.push(this.right.all());
    var cleanedResult = [];
    cleanedResult = cleanedResult.concat.apply(cleanedResult, result);
    return cleanedResult;
  };

  module.exports = Bst;
})();