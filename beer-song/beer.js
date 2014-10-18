var Beer = function(){
};

Beer.verse = function(num) {
  switch(num) {
  case 2:
    return verseTwo();
  case 1:
    return verseOne();
  case 0:
    return verseZero();
  default:
    return defaultVerse(num);
  }
};

Beer.sing = function(start, stop) {
  var last = stop || 0;
  var song = "";
  for (var i = start; i > last; i--){
    song += Beer.verse(i) + "\n";
  }
  song += Beer.verse(last);
  return song;
};

var defaultVerse = function (num) {
  return num + " bottles of beer on the wall, " +
  num + " bottles of beer.\n" +
  "Take one down and pass it around, " +
  (num-1) + " bottles of beer on the wall.\n";
};

var verseTwo = function() {
  return "2 bottles of beer on the wall, " +
  "2 bottles of beer.\n" +
  "Take one down and pass it around, " +
  "1 bottle of beer on the wall.\n";
};

var verseOne = function() {
  return "1 bottle of beer on the wall, " +
  "1 bottle of beer.\n" +
  "Take it down and pass it around, " +
  "no more bottles of beer on the wall.\n";
};

var verseZero = function() {
  return "No more bottles of beer on the wall, " +
  "no more bottles of beer.\n" +
  "Go to the store and buy some more, " +
  "99 bottles of beer on the wall.\n";
};

module.exports = Beer;