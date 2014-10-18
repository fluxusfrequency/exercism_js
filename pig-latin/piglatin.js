(function(){
  'use strict';

  var VOWELS = ["a", "e", "i", "o", "u"];
  var BLENDS = ["ch", "qu", "squ", "th", "thr", "sch"];

  var pigLatin = function() {};

  pigLatin.translate = function(phrase) {
    if (isMultipleWordPhrase(phrase)) {
      return this.translateSentence(phrase);
    }

    if (VOWELS.indexOf(phrase[0]) !== -1) {
      return this.vowelTranslation(phrase);
    } else if (BLENDS.indexOf(phrase.slice(0, 3)) !== -1) {
      return this.longBlendTranslation(phrase);
    } else if (BLENDS.indexOf(phrase.slice(0, 2)) !== -1) {
      return this.shortBlendTranslation(phrase);
    } else {
      return this.consonantTranslation(phrase);
    }
  };

  pigLatin.consonantTranslation = function(phrase) {
    return phrase.slice(1, phrase.length) + phrase[0] + "ay";
  };

  pigLatin.shortBlendTranslation = function(phrase) {
    return phrase.slice(2, phrase.length) + phrase.slice(0, 2) + "ay";
  };

  pigLatin.longBlendTranslation = function(phrase) {
    return phrase.slice(3, phrase.length) + phrase.slice(0, 3) + "ay";
  };

  pigLatin.vowelTranslation = function(phrase) {
    return phrase + "ay";
  };

  pigLatin.translateSentence = function(sentence) {
    var translated = [];
    var words = sentence.split(' ');
    for (var i in words) {
      translated.push(this.translate(words[i]));
    }
    return translated.join(' ');
  };

  function isMultipleWordPhrase(phrase) {
    return phrase.split(' ').length > 1;
  };


  module.exports = pigLatin;
})();