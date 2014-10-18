(function() {
  'use strict';

  var Triangle = function(angle1, angle2, angle3) {
    this.angles = [angle1, angle2, angle3];
  };

  Triangle.prototype.kind = function() {
    if (!this.meetsTriangleEquality() || this.hasNegativeAngles()) {
      return 'illegal';
    }
    var uniqueCount = uniqueAngleCount(this.angles);
    return triangleTypeLookup[uniqueCount];
  };

  Triangle.prototype.meetsTriangleEquality = function() {
    var sorted = this.angles.sort();
    return (sorted[0] + sorted[1] > sorted[2]);
  };

  Triangle.prototype.hasNegativeAngles = function() {
    for (var i = this.angles.length-1; i >= 0; i--) {
      if (this.angles[i] < 0) {
        return true;
      }
    }
    return false;
  };

  function uniqueAngleCount(angles) {
    var unique = [];
    for (var i = angles.length - 1; i >= 0; i--) {
      if (unique.indexOf(angles[i]) === -1) {
        unique.push(angles[i]);
      }
    }
    return unique.length;
  };

  var triangleTypeLookup = {
    1: 'equilateral',
    2: 'isosceles',
    3: 'scalene'
  };

  module.exports = Triangle;
})();