// this array holds the words
let wordList = ['apple', 'orange', 'banana', 'passionfruit', 'watermelon'];

//global variables, keep these outside so that it can be accessed everywhere.
let index;
let word;
let underScore;

let remainingTries = 10;

$(document).ready(function() {
  //Creates a new game with new word.
  $('#new').click(function() {
    $('#hint').show();
    //Reassigns global variable, index --> generates a random number to be used for indexing
    index = Math.floor(Math.random() * wordList.length);
    //Reassigns global variable, word --> uses the randomly generated number to index to a specific word in the wordList array.
    word = wordList[index].toUpperCase();
    //Reassigns global variable underScore --> creates new array to hold the underscores
    underScore = [];
    //the word's length determines how many underscores to include. (Each underscore has an index)
    for (let i = 0; i < word.length; i++) {
      underScore[i] = "__ ";
    }
    $('#underscore').html(underScore);
  });

  $('.letters').click(function() {
    for (let i = 0; i < word.length; i++) {

      //Compares the user's letter pick with every WORD index --> if match, then reassign the corresponding UNDERSCORE index with that letter (changes _ into a letter)
      if(word[i] === this.value) {
        underScore[i] = this.value;
        $('#underscore').html(underScore);
      } else {
        remainingTries -= 1;
        $('#remaining').html('Remaining Tries: ' + remainingTries)
      }
    }

  });

});
