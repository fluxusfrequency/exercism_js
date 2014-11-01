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
    var board = [];
    var emptyRowOrCol = ['0', '0', '0', '0', '0', '0', '0', '0'];
    for (var i = 0; i < 8; i ++) {
      board.push(emptyRowOrCol);
    };
    board[this.white[0]][this.white[1]] = 'W';
    return board.join('\n');
  };

  Queens.prototype._validatePositioning = function(positioning) {
    if (positioning.white === positioning.black) {
      throw new Error('Queens cannot share the same space');
    }
  };

  module.exports = Queens;
})();
