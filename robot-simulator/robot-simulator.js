var VALID_DIRECTIONS = [ 'west', 'north', 'east', 'south' ];
var INSTRUCTIONS = {
  'L': 'turnLeft',
  'R': 'turnRight',
  'A': 'advance'
};
var ADVANCES = {
  'north': [0, 1],
  'east': [1, 0],
  'south': [0, -1],
  'west': [-1, 0]
};

function currentDirectionIndex(direction) {
  return VALID_DIRECTIONS.indexOf(direction);
}

var Robot = function() {
  this.bearing = '';
  this.coordinates = [];
};

Robot.prototype.orient = function(direction) {
  this.bearing = direction;
};

Robot.prototype.turnRight = function() {
  var i = (currentDirectionIndex(this.bearing) + 1) % 4;
  this.bearing = VALID_DIRECTIONS[i];
};

Robot.prototype.turnLeft = function() {
  var i = (currentDirectionIndex(this.bearing) - 1);
  if (i < 0) { i += 4; }
  this.bearing = VALID_DIRECTIONS[i];
};

Robot.prototype.at = function(x, y) {
  this.coordinates = [x, y];
};

Robot.prototype.advance = function() {
  var x = this.coordinates[0];
  var y = this.coordinates[1];
  var deltaX = ADVANCES[this.bearing][0];
  var deltaY = ADVANCES[this.bearing][1];
  this.at(x + deltaX, y + deltaY);
};

Robot.prototype.instructions = function(instructions) {
  instructions = instructions.split('');
  return instructions.map(function(abbreviation) {
    return INSTRUCTIONS[abbreviation];
  });
};

Robot.prototype.place = function(options) {
  this.at(options.x, options.y);
  this.orient(options.direction);
};

Robot.prototype.evaluate = function(plan) {
  var robot = this;
  var instructions = robot.instructions(plan);
  instructions.forEach(function(instruction) {
    robot[instruction]();
  });
};

module.exports = Robot;
