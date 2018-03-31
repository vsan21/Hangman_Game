// // this array holds the words
// let wordList = ['engineer', 'scientist', 'teacher', 'park ranger', 'baker'];
//
// // this chooses a word randomly
// let index = Math.floor(Math.random() * wordList.length);
// let word = wordList[index];

let word = 'DOG';
let wordArray = [];

$(document).ready(function() {
  //Generates a new game. The number of underscores are created based on the word's length and here, each underscore has a specific index.
  $('#new').click(function() {

    for (let i = 0; i < word.length; i++) {
      wordArray[i] = "__ ";
    }
    $('p').html(wordArray);
  });

  $('button').click(function() {
    for (let i = 0; i < word.length; i++) {
      //Compares the user's letter with every WORD index --> if match, then reassign the UNDERSCORE index with that letter (changes _ into a letter)
      if(word[i] === this.value) {
        wordArray[i] = this.value;
        $('p').html(wordArray);
      } else {
        // try again, add new body part
      }
    }
  });

});
