(function() {
  var Clock = function(hour, minutes) {
    this.hour = hour;
    this.minutes = minutes || 0;

    if (!(this instanceof Clock)) {
      return new Clock(hour, minutes);
    }
  };

  Clock.prototype.pad = function(time) {
    if (time.toString().length === 1) {
      return '0' + time;
    } else {
      return time;
    }
  };

  Clock.prototype.toString = function() {
    var hour_ = this.pad(this.hour);
    var minutes_ = this.pad(this.minutes);
    return [hour_, ':', minutes_].join('');
  };

  Clock.prototype.plus = function(step) {
    var hour_ = this.hour;
    var minutes_ = this.minutes + step;
    while (minutes_ >= 60) {
      hour_ += 1;
      minutes_ -= 60;
    }
    while (hour_ > 23) {
      hour_ -= 24;
    }
    return new Clock(hour_, minutes_).toString();
  };

  Clock.prototype.minus = function(step) {
    var hour_ = this.hour;
    var minutes_ = this.minutes - step;
    while (minutes_ < 0) {
      hour_ -= 1;
      minutes_ += 60;
    }
    while (hour_ < 0) {
      hour_ += 24;
    }
    return new Clock(hour_, minutes_).toString();
  };

  Clock.prototype.equals = function(other) {
    return this.toString() === other.toString();
  };

  module.exports = { at: Clock };
})();
