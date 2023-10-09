/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (password !== null){
    if (typeof password !== "string") password = String(password);
    // const regex = /(.)\1+/gi;
    // const sequence = password.match(regex)
    let points = 0;

    const regex = /(\w)\1+/g;
    const sequences = password.match(regex);

    if (sequences) {
      for (const sequence of sequences) {
        if (sequence.length === 2) {
          points += 1;
        } else if (sequence.length >= 3) {
          points += 2;
        }
      }
      return points;
    } else {
      return 0
    }

  }
  return 0
}
