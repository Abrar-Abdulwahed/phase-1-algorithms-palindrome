function isPalindrome(word) {
  // Write your algorithm here
  const arrWord = word.split('');
  const reverseArrWord = arrWord.reverse();
  return word == reverseArrWord.join('') ? true: false;
}

/* 
  Add your pseudocode here
  1. convert string to array in order to use reverse() which used with arrays.
  2. reverse string-converted array.
  3. convert array to string
  4. compare original word with reverse string.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
