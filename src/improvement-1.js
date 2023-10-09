/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function function1(word) {
  let letterRCount = 0;
  for (let character = 0; character < word.length; character++) {
    if (word[character] == "R") {
      letterRCount++;
    }
  }
  return letterRCount;
}
