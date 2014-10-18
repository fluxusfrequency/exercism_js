(function() {
  'use strict';
  var song = {},
      DINING_EXPERIENCES = {},
      animals = [];

  DINING_EXPERIENCES = {
    'fly': '',
    'spider': 'It wriggled and jiggled and tickled inside her.',
    'bird': 'How absurd to swallow a bird!',
    'cat': 'Imagine that, to swallow a cat!',
    'dog': 'What a hog, to swallow a dog!',
    'goat': 'Just opened her throat and swallowed a goat!',
    'cow': 'I don\'t know how she swallowed a cow!',
    'horse': 'She\'s dead, of course!'
  };

  animals = Object.keys(DINING_EXPERIENCES);

  function preamble(animal) {
    return 'I know an old lady who swallowed a ' + animal + '.';
  };

  function gastricReaction(animal) {
    return DINING_EXPERIENCES[animal];
  };

  function conclusion() {
    return "I don't know why she swallowed the fly. Perhaps she'll die.\n";
  };

  function motivation(i) {
    var motivation = [];

    while (i > 1) {
      i--;
      motivation.push(buildLine(i));
    }
    return motivation.join('');
  };

  function buildLine(i) {
    var newAnimal = animals[i];
    var oldAnimal = animals[i - 1];
    var newLine = ['She swallowed the ', newAnimal, ' to catch the ', oldAnimal];

    newLine.push(i === 2 ? ' that wriggled and jiggled and tickled inside her' : '');
    newLine.push('.');
    if (i !== 1) { newLine.push('\n'); }

    return newLine.join('');
  };

  function reciteHorseVerse() {
    return [ preamble('horse'), DINING_EXPERIENCES['horse'] ].join('') + '\n';
  };

  function filterSilence(array) {
    return array.filter(function(element) {
      return element !== '';
    });
  }



  song.verse = function(i) {
    var verse;
    var animal = Object.keys(DINING_EXPERIENCES)[i - 1];
    if (animal === 'horse') { return reciteHorseVerse(); }

    verse = [
      preamble(animal),
      gastricReaction(animal),
      motivation(i),
      conclusion()
    ];
    return (filterSilence(verse)).join('\n');
  };

  song.verses = function(i, j) {
    var song = [];
    while(i <= j) {
      song.push(this.verse(i));
      i++;
    }
    return song.join('\n') + '\n';
  };

  module.exports = song;
})();
