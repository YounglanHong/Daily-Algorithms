// #02-isPalindrome
// returns true if palindrome(reads the same for/backward), otherwise false

function isPalindrome(str) {
  let result = [];
  function helper(helperStr) {
    let leng = helperStr.length;
    let first = helperStr[0];
    let last = helperStr[leng - 1];

    if (leng === 0) return; // base case
    // console.log(first, last, result);
    first === last ? result.push(true) : result.push(false);
    helper(helperStr.slice(1, leng - 1)); // recur
  }
  helper(str);
  return result.every((el) => el); // when every elements is true, return true
}
