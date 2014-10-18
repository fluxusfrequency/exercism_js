(function() {
  'use strict';

  var Gigasecond = function(date) {
    this.birthday = date;
  };

  Gigasecond.prototype.date = function() {
    var later = new Date(this.birthday.getTime() + MILLISECONDS_PER_GIGASECOND);
    return justMonths(later);
  };

  function justMonths(date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
  }

  var MILLISECONDS_PER_SECOND = 1000;
  var SECONDS_PER_GIGASECOND = 1000000000;
  var MILLISECONDS_PER_GIGASECOND = SECONDS_PER_GIGASECOND*MILLISECONDS_PER_SECOND;

  module.exports = Gigasecond;
})();