(function() {

var DNA = function(firstStrand) {
  this.strand = firstStrand;
};

DNA.prototype.hammingDistance = function(secondStrand) {
  var shortestStrandLength = Math.min(secondStrand.length, this.strand.length);
  var distanceCount = 0;
  for (var i = 0; i < shortestStrandLength; i++) {
    if(secondStrand[i] !== this.strand[i]) {
      distanceCount += 1;
    }
  }
  return distanceCount;
};

module.exports = DNA;

})();
