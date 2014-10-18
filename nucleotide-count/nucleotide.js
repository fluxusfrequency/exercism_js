(function() {
var dnaNucleotides = ['A', 'T', 'C', 'G'];

var DNA = function(dna) {
  this.nucleotideCounts = countNucleotides(dna);
};

DNA.prototype.count = function(nucleotide) {
  validateNucleotide(nucleotide);
  return this.nucleotideCounts[nucleotide] || 0;
};

var countNucleotides = function(nucleotides) {
  return nucleotides.split('').reduce(function(counts, n) {
    validateNucleotide(n);
    counts[n] += 1;
    return counts;
  }, emptyDnaCounts());
};

var validateNucleotide = function(i) {
  if (i !== "U" && dnaNucleotides.indexOf(i) === -1) {
    throw new Error("Invalid Nucleotide");
  }
};

var emptyDnaCounts = function() {
  return {"A": 0, "T": 0, "C": 0, "G": 0};
};

module.exports = DNA;

})();
