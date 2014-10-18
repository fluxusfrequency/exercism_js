function DNA(strand) {
  this.strand = strand.split('');
  this.nucleotideCounts = this.nucleotideCounts();
}

DNA.prototype = {
  DNA:          ['A', 'T', 'C', 'G'],
  validNucleos: ['A', 'T', 'C', 'G', 'U'],

  validate: function(nucleo) {
    if (!(this.validNucleos.indexOf(nucleo) > -1)) throw 'Invalid Nucleotide'
  },
  count: function(nucleo) {
    this.validate(nucleo)
    var count = 0
    this.strand.forEach(function(letter) {
      if (nucleo === letter) count++
    })
    debugger
    return count
  },
  nucleotideCounts: function() {
    result = {}
    this.DNA.forEach(function(nucleo) {
      result[nucleo] = this.count(nucleo)
    }, this)
    return result
  },
}

module.exports = DNA