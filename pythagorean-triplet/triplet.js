(function() {
  'use strict';

  var Triplet = function(first, second, third) {
    this.first = first;
    this.second = second;
    this.third = third;
    this.angles = [first, second, third].sort(sortNumber);
  };

  Triplet.prototype.sum = function() {
    return this.first + this.second + this.third;
  };

  Triplet.prototype.product = function() {
    return this.first * this.second * this.third;
  };

  Triplet.prototype.isPythagorean = function() {
    var intTest = /^-?(\d+|0)$/;
    if (!intTest.test(this.angles[2])) { return false; }

    return (Math.pow(this.angles[0], 2) + Math.pow(this.angles[1], 2) === Math.pow(this.angles[2], 2));
  };

  Triplet.where = function(options) {
    var max = options['maxFactor'];
    var min = options['minFactor'] || 1;
    var sum = options['sum'];
    var result = this.calculateTriplets(min, max);

    if (sum) {
      return this.matchSum(sum, result);
    } else {
      return result;
    }
  };

  Triplet.calculateTriplets = function(min, max) {
    var triplets = [];
    for (var x = min; x < max; x++) {
      for (var y = min; y < max; y++) {
        var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        var t = new Triplet(x, y, z);
        if (t.isPythagorean() && !Triplet.inCollection(triplets, t)) {
          triplets.push(t);
        }
      }
    }
    return triplets;
  };

  Triplet.inCollection = function(collection, triplet) {
    var filtered = collection.filter(function(x) {
      return x.angles.sort().eql(triplet.angles.sort());
    });
    return filtered.length !== 0;
  };

  Triplet.matchSum = function(sum, collection) {
    var result = [];
    for (var x = 0; x < collection.length; x++) {
      if (collection[x].sum() === sum) {
        result.push(collection[x]);
      }
    }
    return result;
  };

  Array.prototype.eql = function(other){
    if (this.length !== other.length) { return false; }

    for(var i = 0; i < this.length; i++) {
      if(this[i] !== other[i]) {
        return false;
      }
    }
    return true;
  };

  function sortNumber(a,b) {
    return a - b;
  }

  module.exports = Triplet;
})();