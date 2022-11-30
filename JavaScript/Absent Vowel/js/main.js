// Create a function that can identify the missing vowels in a sentence
// Will assign vowels to be 'aeiou' to label the English vowels
// Creating a conditional and use indexOf to identify the vowels in the index
// return the missing vowel in the sentences

function absentVowel(x) {
    let vowels = 'aeiou';
    for(let i in vowels) {
      if(x.indexOf(vowels[i]) == -1) {
        return Number(i);
      }
    }  
  }