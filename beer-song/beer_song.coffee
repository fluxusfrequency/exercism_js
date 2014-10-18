Beer = ->
module.exports = Beer

Beer.verse = (num) ->
  if (num == 2) {
    verse_two
  } else if (num == 1) {
    verse_one
  } else if (num == 0) {
    verse_zero
  } else {
    default_verse: (num)
  }

Beer.sing = (start, stop) ->
  stop = stop || 0
  message = ""
  i = start
  while (i >= stop)
    message += verse: (i)
    if (i > stop)
      message += "\n"
    i--
  message

default_verse = (num) ->
  message = num + " bottles of beer on the wall, "
  message += num + " bottles of beer.\n"
  message += "Take one down and pass it around, "
  message += (num-1) + " bottles of beer on the wall.\n"
  message

verse_two = ->
  message = "2 bottles of beer on the wall, "
  message += "2 bottles of beer.\n"
  message += "Take one down and pass it around, "
  message += "1 bottle of beer on the wall.\n"
  message

verse_one = ->
  message = "1 bottle of beer on the wall, "
  message += "1 bottle of beer.\n"
  message += "Take it down and pass it around, "
  message += "no more bottles of beer on the wall.\n"
  message

verse_zero = ->
  message = "No more bottles of beer on the wall, "
  message += "no more bottles of beer.\n"
  message += "Go to the store and buy some more, "
  message += "99 bottles of beer on the wall.\n"
  message

