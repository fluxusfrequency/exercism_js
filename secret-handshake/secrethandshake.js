(function(){
  'use strict';

  var SecretHandshake = function(marker) {
    if (!/^\d+$/.test(marker)) {
      throw "Handshake must be a number";
    }
    this.marker = marker.toString(2);
  };

  SecretHandshake.prototype.commands = function() {
    if (switches(this.marker)[4] === "1") {
      return (actions(this.marker)).reverse();
    }
    return actions(this.marker);
  };

  var actions = function(marker) {
    var results = [];
    var s = switches(marker);
    for (var i = 0; i < s.length; i++) {
      if (s[i] == "1") {
        var key = s[i];
        for (var j = 0; j < i; j++) {
          key += "0";
        }
        if (knownCommands[key]) {
          results.push(knownCommands[key]);
        }
      }
    }
    return results;
  };

  var switches = function(marker) {
    return marker.split('').reverse();
  };
  
  var knownCommands = {
    "1" : "wink",
    "10" : "double blink",
    "100" : "close your eyes",
    "1000": "jump"
  };
  
  module.exports = SecretHandshake;
})();