(function() {
  'use strict';

  var School = function(inputName) {
    this.name = inputName;
    this.db = {};
  };

  School.prototype.add = function(student, grade) {
    if (this.db[grade]) {
      this.db[grade].push(student);
    } else {
      this.db[grade] = [student];
    }
  };

  School.prototype.grade = function(grade) {
    return this.db[grade] || [];
  };

  School.prototype.sort = function() {
    for(var grade in this.db) {
      this.db[grade].sort();
    }
    return this.db;
  };

  module.exports = School;

})();