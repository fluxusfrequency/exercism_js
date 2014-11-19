module.exports = {
  OCR_MATRICES: [
    [" ", "|", "|", "_", " ", "_", " ", "|", "|"],
    [" ", " ", " ", " ", " ", " ", " ", "|", "|"],
    [" ", " ", "|", "_", "_", "_", " ", "|", " "],
    [" ", " ", " ", "_", "_", "_", " ", "|", "|"],
    [" ", "|", " ", " ", "_", " ", " ", "|", "|"],
    [" ", "|", " ", "_", "_", "_", " ", " ", "|"],
    [" ", "|", "|", "_", "_", "_", " ", " ", "|"],
    [" ", " ", " ", "_", " ", " ", " ", "|", "|"],
    [" ", "|", "|", "_", "_", "_", " ", "|", "|"],
    [" ", "|", " ", "_", "_", "_", " ", "|", "|"]
  ],

  convert: function(ocrNumber) {
    var split = ocrNumber.split('\n');
    var converted = [];
    for(var i = 0, max = split.length; i < max; i += 4) {
      var line = split.slice(i, i + 4);
      converted.push(this.ocr(line));
    }
    return converted.join('');
  },

  ocr: function(line) {
    line.pop();
    var cols = this.colsForLine(line);
    return this.translateCols(cols);
  },

  colsForLine: function(line) {
    var cols = [];
    var length = line[0].length;
    for(var i = 0; i < length; i++) {
      cols.push(line.map(function(row) {
        return row[i];
      }));
    }
    return cols;
  },

  translateCols: function(cols) {
    var matrices = [];
    for(var i = 0, max = cols.length; i < max; i += 3) {
      var matrix = cols.slice(i, i + 4);
      matrices.push(this.translateMatrix(matrix));
    }
    return matrices.join('');
  },

  translateMatrix: function(matrix) {
    return Number(this.OCR_MATRICES.indexOf(matrix));
  }
}
