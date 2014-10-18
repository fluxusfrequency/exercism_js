(function() {
  'use strict';

  var PLANETS = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

  var ORBITALS = {
    "mercury": 0.2408467,
    "venus": 0.61519726,
    "earth": 1,
    "mars": 1.8808158,
    "jupiter": 11.862615,
    "saturn": 29.447498,
    "uranus": 84.016846,
    "neptune": 164.79132
  };

  var EARTH_YEAR_IN_SECONDS = 60*60*24*365.25;

  var SpaceAge = function(seconds) {
    this.seconds = seconds;
  };

  SpaceAge.prototype.earthYearsOnPlanet = function(planet) {
    var seconds = EARTH_YEAR_IN_SECONDS * ORBITALS[planet];
    var years = this.seconds/seconds;
    return parseFloat(years.toFixed(2));
  };

  for (var i = 0; i < PLANETS.length; i++) {
    var planet = PLANETS[i];
    SpaceAge.prototype["on" + capitalize(planet)] = buildPlanetFunction(planet);
  };

  function buildPlanetFunction(planet) {
    return function() {
      return this.earthYearsOnPlanet(planet);
    };
  };

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  module.exports = SpaceAge;
})();