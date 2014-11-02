(function() {
  'use strict';

  var DEFAULT_POSITIONING = {
    white: [0, 3],
    black: [7, 3]
  };

  var Queens = function(positioning) {
    positioning= positioning || DEFAULT_POSITIONING;
    this._validatePositioning(positioning);

    this.white = positioning.white;
    this.black = positioning.black;
  };

  Queens.prototype.toString = function() {
    var rows = [];
    for (var i = 0; i < 8; i++) {
      var col = [];
      for (var j = 0; j < 8; j++) {
        if (this._isWhiteSquare(i, j)) {
          col.push('W');
        } else if (this._isBlackSquare(i, j)) {
          col.push('B');
        } else {
          col.push('O');
        }
      }
      rows.push(col.join(' '));
    }
    return rows.join('\n') + '\n';
  };

  Queens.prototype.canAttack = function() {
    return this._sameColumn(this.white, this.black) ||
           this._sameRow(this.white, this.black) ||
           this._sameDiagonal(this.white, this.black);
  };

  Queens.prototype._validatePositioning = function(positioning) {
    if (positioning.white === positioning.black) {
      throw new Error('Queens cannot share the same space');
    }
  };

  Queens.prototype._isWhiteSquare = function(row, col) {
    return row === this.white[0] && col === this.white[1];
  };

  Queens.prototype._isBlackSquare = function(row, col) {
    return row === this.black[0] && col === this.black[1];
  };

  Queens.prototype._sameColumn = function(position1, position2) {
    return position1[0] === position2[0];
  };

  Queens.prototype._sameRow = function(position1, position2) {
    return position1[1] === position2[1];
  };

  Queens.prototype._sameDiagonal = function(position1, position2) {
    return this._offset(position1) === this._offset(position2);
  };

  Queens.prototype._offset = function(color) {
    return Math.abs(color[1] - color[0]);
  };

  module.exports = Queens;
})();
