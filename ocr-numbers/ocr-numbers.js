(function() {
  Array.prototype.flatten = function() {
    return Array.prototype.concat.apply([], this);
  };

  Array.prototype.equals = function(other) {
    if(this === other) { return true; }
    if(this == null || other == null) { return false; }
    if(this.length !== other.length) { return false; }

    for (var i = 0; i < this.length; ++i) {
      if (this[i] !== other[i]) return false;
    }
    return true;
  };

  var OCR_MATRICES = [
    [' ', '|', '|', '_', ' ', '_', ' ', '|', '|'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', '|'],
    [' ', ' ', '|', '_', '_', '_', ' ', '|', ' '],
    [' ', ' ', ' ', '_', '_', '_', ' ', '|', '|'],
    [' ', '|', ' ', ' ', '_', ' ', ' ', '|', '|'],
    [' ', '|', ' ', '_', '_', '_', ' ', ' ', '|'],
    [' ', '|', '|', '_', '_', '_', ' ', ' ', '|'],
    [' ', ' ', ' ', '_', ' ', ' ', ' ', '|', '|'],
    [' ', '|', '|', '_', '_', '_', ' ', '|', '|'],
    [' ', '|', ' ', '_', '_', '_', ' ', '|', '|']
  ]

  function ocr(line) {
    line.pop();
    var cols = colsForLine(line);
    return translateCols(cols);
  }

  function colsForLine(line) {
    var cols = [];
    var length = line[0].length;
    for(var i = 0; i < length; i++) {
      cols.push(line.map(function(row) {
        return row[i];
      }));
    }
    return cols;
  }

  function translateCols(cols) {
    var matrices = [];
    for(var i = 0, max = cols.length; i < max; i += 3) {
      var matrix = cols.slice(i, i + 3);
      matrices.push(translateMatrix(matrix));
    }
    return matrices.join('');
  }

  function translateMatrix(matrix) {
    var matrices = OCR_MATRICES;
    var match = '?';
    matrices.forEach(function(candidate) {
      if (matrix.flatten().equals(candidate)) {
        match = matrices.indexOf(candidate);
      }
    });
    return match;
  }

  module.exports = {
    convert: function(ocrNumber) {
      var split = ocrNumber.split('\n');
      var converted = [];
      for(var i = 0, max = split.length; i < max; i += 4) {
        var line = split.slice(i, i + 4);
        converted.push(ocr(line));
      }
      return converted.join(',');
    }
  };
})();
