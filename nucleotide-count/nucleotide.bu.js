(function() {
var DNA = function(dna) {
  this.nucleotides = dna.split;
  this.nucleotideCounts = {
    A: 0,
    T: 0,
    C: 0,
    G: 0
  };
};

DNA.prototype.count = function(match){
    return 0;
  };
};

// var nucleotide_counts = function () {
//   var counts = {'A' => 0, 'T' => 0, 'C' => 0, 'G' => 0};

// }

// var check_for_uracil = function(input) {
//   if (input.indexOf(input) !== -1) {
//     return new Error("Invalid Nucleotide");
//   }
// };

var all_nucleotides = ['A', 'T', 'C', 'G', 'U'];
var dna_nucleotides = ['A', 'T', 'C', 'G'];


module.exports = DNA;

})();
