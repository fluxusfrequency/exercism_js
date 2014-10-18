(function() {
  'use strict';

  var Leap = function(year){
    this.year = year;
  };

  Leap.prototype.isLeapYear = function () {
    if (!checkLeapCentury(this.year)) { return false;}
    if (normalLeap(this.year)) { return true; }
    return false;
  };

  function checkLeapCentury(year) {
    if (normalCentury(year) && !quadrennialCentury(year)) {
      return false;
    }
    return true;
  }

  function normalLeap(year) {
    if (year % 4 === 0) {
      return true;
    }
  }

  function quadrennialCentury(year) {
    if (year % 400 === 0) {
      return true;
    }
  }

  function normalCentury(year) {
    if (year % 100 === 0) {
      return true;
    }
  }

  module.exports = Leap;
})();