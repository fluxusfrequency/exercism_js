(function() {
  'use strict';

  var Garden = function(diagram, roster) {
    this.roster = roster ? roster.sort() : DEFAULT_ROSTER;
    this.rows = diagram.split("\n");
    this.spots = spotsForClass(this.roster);

    for (var i = 0; i < this.roster.length; i++) {
      var student = this.roster[i];
      var result = this.forStudent(student);
      this[student.toLowerCase()] = result;
    };

  };

  Garden.prototype.forStudent = function(student) {
    var start = this.spots[student][0];
    var end = this.spots[student][1];

    return this.rows.map(function(row) {
      return translateRow(row, start, end);
    }).flatten();
  }

  function translateRow(row, start, end) {
    return row.split('').slice(start, end).map(function(char) {
      return translate(char);
    });
  }

  function translate(abbreviation) {
    return TRANSLATIONS[abbreviation];
  }

  function spotsForClass(roster) {
    var spots = {};
    for (var i = 0; i < roster.length; i++) {
      spots[roster[i]] = [(i * 2), ((i * 2) + 2)];
    }
    return spots;
  }


  var TRANSLATIONS = {
    'R': 'radishes',
    'C': 'clover',
    'G': 'grass',
    'V': 'violets'
  };

  var DEFAULT_ROSTER = [
    'alice',
    'bob',
    'charlie',
    'david',
    'eve',
    'fred',
    'ginny',
    'harriet',
    'ileana',
    'joseph',
    'kincaid',
    'larry'
  ];

  Array.prototype.flatten = function() {
    return this.reduce(function(a, b) {
      return a.concat(b);
    });
  };

  module.exports = Garden;
})();
