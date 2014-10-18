(function() {
  'use strict';

  var Matrix = function(data) {
    this.data = data;
    this.rows = this.rows();
    this.columns = this.columns();
  };

  Matrix.prototype.rows = function() {
    var rows = this.data.split("\n");
    return rows.map(parseRow);
  };

  Matrix.prototype.columns = function() {
    var rows = this.rows;
    return rows.map(function(col, i) {
      return rows.map(function(row) {
        return row[i];
      });
    });
  };

  function parseRow(row) {
    return "".split.call(row, " ").map(returnInt);
  };

  function returnInt(element){
    return parseInt(element,10);
  };


  if (!Array.prototype.map)
  {
    Array.prototype.map = function(fun /*, thisArg */)
    {
      "use strict";

      if (this === void 0 || this === null)
        throw new TypeError();

      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun !== "function")
        throw new TypeError();

      var res = new Array(len);
      var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
      for (var i = 0; i < len; i++)
      {
        if (i in t)
          res[i] = fun.call(thisArg, t[i], i, t);
      }

      return res;
    };
  }

  module.exports = Matrix;

})();