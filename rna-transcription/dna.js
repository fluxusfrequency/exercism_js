(function() {
var DNA = function(dna) {
  this.dna = dna;
};

DNA.prototype.toRNA = function() {
  return this.dna.replace(/T/g, 'U');
};

module.exports = DNA;

})();
