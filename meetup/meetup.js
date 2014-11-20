(function() {
  var DAYS = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  var POSITIONS = ['first', 'second', 'third', 'fourth', 'last'];

  function isDay(date, day) {
    return date.getDay() === DAYS.indexOf(day);
  };

  var Meetup = function(month, year) {
    this.month = month;
    this.year = year;
  };

  Meetup.prototype.monteenth = function() {
    return this.dayFor('Monday', 'teenth');
  };

  Meetup.prototype.tuesteenth = function() {
    return this.dayFor('Tuesday', 'teenth');
  };

  Meetup.prototype.wednesteenth = function() {
    return this.dayFor('Wednesday', 'teenth');
  };

  Meetup.prototype.thursteenth = function() {
    return this.dayFor('Thursday', 'teenth');
  };

  Meetup.prototype.friteenth = function() {
    return this.dayFor('Friday', 'teenth');
  };

  Meetup.prototype.saturteenth = function() {
    return this.dayFor('Saturday', 'teenth');
  };

  Meetup.prototype.sunteenth = function() {
    return this.dayFor('Sunday', 'teenth');
  };

  DAYS.forEach(function(day) {
    POSITIONS.forEach(function(position) {
      Meetup.prototype[position + day] = function() {
        return this.dayFor(day, position);
      }
    });
  });


  Meetup.prototype.dayFor = function(weekday, position) {
    var day = this._findStartDay()[position];
    var date = new Date(this.year, this.month, day);
    while (date.getDay() !== DAYS.indexOf(weekday)) {
      date.setDate(date.getDate() + 1)
    }
    return date;
  };

  Meetup.prototype._findStartDay = function() {
    return {
      teenth: 13,
      first: 1,
      second: 8,
      third: 15,
      fourth: 22,
      last: new Date(this.year, this.month + 1, 0).getDate() - 6
    }
  };

  module.exports = Meetup;
})();
