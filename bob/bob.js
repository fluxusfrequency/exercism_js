var Bob = function() {};

Bob.prototype.hey = function(phrase) {
  var message = new Message(phrase);
  if(message.isSilent()){
    return 'Fine. Be that way!';
  } else if(message.isShout()){
      return 'Whoa, chill out!';
  } else if(message.isQuestion()){
      return 'Sure.';
  } else {
      return 'Whatever.';
  }
};

var Message = function(phrase) {
  this.phrase = phrase
};

Message.prototype.isSilent = function() {
  return this.phrase.trim() === "";
};

Message.prototype.isShout = function() {
  return this.hasWords() && this.phrase == this.phrase.toUpperCase();
};

Message.prototype.isQuestion = function() {
  return this.phrase.slice(-1) === "?";
};

Message.prototype.hasWords = function() {
  return this.phrase.match(/[a-zA-Z]+/);
};

module.exports = Bob;
