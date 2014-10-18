(function() {
  'use strict';

  var CustomSet = function(list) {
    this.list = list || [];
  };

  CustomSet.prototype.eql = function(other) {
    return aryEql(this.list.sort(), other.list.sort());
  };

  CustomSet.prototype.delete = function(datum) {
    var i = 0;
    var new_list = [];
    for (i; i < this.list.length; i++ ) {
      if (this.list[i] !== datum) {
        new_list.unshift(this.list[i]);
      }
    }
    return new CustomSet(new_list);
  };

  CustomSet.prototype.difference = function(other) {
    var new_list = this.list;
    for (var i in other.list) {
      if (this.list.indexOf(other.list[i] !== -1)) {
        var index = this.list.indexOf(other.list[i]);
        new_list.splice(index, 1);
      }
    }
    return new CustomSet(new_list);
  };

  CustomSet.prototype.disjoint = function(other) {
    if (this.list.length < 1) {
      return false;
    }

    for (var i = 0; i < other.list.length; i++) {
      if (this.list.indexOf(other.list[i]) !== -1) {
        return false;
      }
    }
    return true;
  };

  function aryEql(first, second) {
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        return false;
      }
    }
    return true;
  };

  module.exports = CustomSet;
})();