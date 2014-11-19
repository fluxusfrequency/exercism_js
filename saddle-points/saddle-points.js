var Matrix = function(rawMatrix) {
  this.rows = this._findRows(rawMatrix);
  this.columns = this._findColumns();
  this.saddlePoints = this._findSaddlePoints();
};

Matrix.prototype._findRows = function(rawMatrix) {
  return rawMatrix.split(/\n/).map(function(row) {
    return row.split(' ').map(function(number) {
      return Number(number);
    });
  });
};

Matrix.prototype._findColumns = function() {
  var columns = [];
  for(var i = 0, max = this.rows.length; i < max; i++) {
    var mapped = this.rows.map(function(row) {
      return row[i];
    });
    columns.push(mapped);
  }
  return columns;
};

Matrix.prototype._findSaddlePoints = function() {
  var self = this;
  var saddlePoints = [];
  for(var i = 0, iMax = this.rows.length; i < iMax; i++) {
    var maxInRow = Math.max.apply(null, self.rows[i]);
    for(var j = 0, jMax = this.rows.length; j < jMax; j++) {
      var minInColumn = Math.min.apply(null, self.columns[j]);
      if(self.rows[i][j] === maxInRow && self.rows[i][j] === minInColumn) {
        saddlePoints.push([i, j]);
      }
    }
  }
  return saddlePoints;
};

module.exports = Matrix;
