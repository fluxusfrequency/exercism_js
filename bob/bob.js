var Bob = function() {};
var Message = function(input) {this.input = input};
module.exports = Bob;

Bob.prototype.hey = function(phrase) {
  var message = new Message(phrase);
  if(message.silence()){
    return 'Fine. Be that way!';
  } else if(message.yelling()){
      return 'Woah, chill out!';
  } else if(message.question()){
      return 'Sure.';
  } else {
      return 'Whatever.';
  }
};


Message.prototype.question = function() {
  return this.input.slice(-1) === "?";
};

Message.prototype.silence = function() {
  return this.input.trim() === "";
};

Message.prototype.yelling = function() {
  return this.input == this.input.toUpperCase();
};

