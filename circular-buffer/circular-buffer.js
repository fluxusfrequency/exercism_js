var CircularBuffer = function(size) {
  if (!(this instanceof CircularBuffer)) { return new CircularBuffer(size); }
  this.size = size;
  this.clear();
};

CircularBuffer.prototype.clear = function(datum) {
  this.readHead = 0;
  this.writeHead = 0;
  this.data = new Array(this.size);
};

CircularBuffer.prototype.read = function() {
  if (!this.data) { throw bufferEmptyException(); }
  var datum = this.data[this.readHead];
  this.data[this.readHead] = null;
  this._advanceReadHead();
  return datum;
};

CircularBuffer.prototype.write = function(datum) {
  if (this.isFull()) { throw bufferFullException(); }
  this._update(datum);
};

CircularBuffer.prototype.forceWrite = function(datum) {
  this._update(datum);
  if (this.isFull()) { this._advanceReadHead(); }
};

CircularBuffer.prototype.isFull = function() {
  return this.data.filter(datumIsPresent).length === this.size;
};

CircularBuffer.prototype._update = function(datum) {
  if (!datumIsPresent(datum)) { return; }
  this.data[this.writeHead] = datum;
  this._advanceWriteHead();
};

CircularBuffer.prototype._advanceReadHead = function() {
  this.readHead = (this.readHead + 1) % this.size;
};

CircularBuffer.prototype._advanceWriteHead = function() {
  this.writeHead = (this.writeHead + 1) % this.size;
};

function datumIsPresent(datum) {
  return datum !== null && datum !== undefined;
}

var bufferEmptyException = function() {
  return new Error('Buffer is empty');
};

var bufferFullException = function() {
  return new Error('Buffer is full');
};

module.exports = {
  circularBuffer: CircularBuffer,
  bufferEmptyException: bufferEmptyException,
  bufferFullException: bufferFullException
};
