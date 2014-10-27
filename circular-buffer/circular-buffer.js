var bufferEmptyException = function() {
  return new Error('Buffer is empty');
};

var bufferFullException = function() {
  return new Error('Buffer is full');
};

Array.prototype.lastElement = function() {
  return this[this.length - 1];
};

var CircularBuffer = function(size) {
  if (!(this instanceof CircularBuffer)) {
    return new CircularBuffer(size);
  }
  this.size = size;
  this.clear();
};

CircularBuffer.prototype.read = function() {
  if (!this.data) { throw bufferEmptyException(); }
  var datum = this.data[this.readHead];
  this.data[this.readHead] = null;
  this.readHead = (this.readHead + 1) % this.size;
  return datum;
};

CircularBuffer.prototype.write = function(datum) {
  if (this._isFull()) {
    throw bufferFullException();
  }
  this._update(datum);
};

CircularBuffer.prototype.forceWrite = function(datum) {
  this._update(datum);
  if (this.data.length === this.size) {
    this.readHead = (this.readHead + 1) % this.size;
  }
};

CircularBuffer.prototype._update = function(datum) {
  if (datum === null || datum === undefined) { return; }
  this.data[this.writeHead] = datum;
  this.writeHead = (this.writeHead + 1) % this.size;
};

CircularBuffer.prototype._isFull = function() {
  return this.data.filter(function(datum) {
    return datum !== null && datum !== undefined;
  }).length === this.size;
};


CircularBuffer.prototype.clear = function(datum) {
  this.readHead = 0;
  this.writeHead = 0;
  this.data = new Array(this.size);
};

module.exports = {
  circularBuffer: CircularBuffer,
  bufferEmptyException: bufferEmptyException,
  bufferFullException: bufferFullException
};
