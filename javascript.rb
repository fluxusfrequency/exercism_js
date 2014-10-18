class Exercism
  class JavascriptCurriculum
    def slugs
      %w(
        bob word-count anagram beer-song nucleotide-count
        rna-transcription point-mutations phone-number
        grade-school robot-name leap etl space-age grains
        gigasecond triangle scrabble-score roman-numerals
        binary prime-factors raindrops allergies strain
        atbash-cipher accumulate trinary sieve octal
        pig-latin pythagorean-triplet
        series difference-of-squares
        linked-list secret-handshake nth-prime
        hexadecimal largest-series-product
        palindrome-products matrix
        binary-search-tree wordy
        kindergarten-garden
        pascals-triangle
        sum-of-multiples

        luhn

        robot-simulator
        say
        queen-attack
        saddle-points
        ocr-numbers
        simple-cipher
        crypto-square
        meetup
      )
      # always put meetup last. It's crazy in javascript.
    end

    def locale
      Locale.new('javascript', 'js', 'spec.js')
    end
  end
end
