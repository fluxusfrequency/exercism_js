(function() {
  'use strict';

  var Phone = function(rawNumber) {
    this.cleaned = cleanNumber(rawNumber);
  };

  Phone.prototype.number = function(){
    return this.cleaned;
  };

  Phone.prototype.areaCode = function() {
    return this.cleaned.slice(0, 3);
  };

  Phone.prototype.numPrefix = function() {
    return this.cleaned.slice(3, 6);
  };

  Phone.prototype.numSuffix = function() {
    return this.cleaned.slice(6);
  };

  Phone.prototype.toString = function() {
     return "(" + this.areaCode() + ") " + 
      this.numPrefix() + "-" + 
      this.numSuffix();
  };

  function lengthCorrectedNumber( cleanedNumber ) {
    if (cleanedNumber.length === 10) {
      return cleanedNumber;
    } else if ( cleanedNumber[0] === '1' && cleanedNumber.length === 11 ) {
      return cleanedNumber.slice(1);
    } else {
      return "0000000000";
    }
  };

  function cleanNumber(rawNumber) {
    var cleaned = rawNumber.replace(/\D+/g, "");
    return lengthCorrectedNumber( cleaned );
  };

  module.exports = Phone;

})();