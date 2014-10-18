'use strict';

module.exports = {
  compute: function(strand1, strand2) {
    var len = Math.min(strand1.length, strand2.length);
    var count = 0;

    for (var i = 0; i < len; i++) {
      if (strand1[i] !== strand2[i]) {
        count++;
      }
    }
    return count;
  }
};
