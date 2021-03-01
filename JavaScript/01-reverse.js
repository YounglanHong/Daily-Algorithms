// #01-reverse
// accepts a string, returns a new string in reverse

function reverse(str) {
  let result = "";

  function helper(helperStr) {
    let str_length = helperStr.length;
    if (helperStr.length === 0) return; // base case
    result += helperStr.slice(-1); // store last char
    helper(helperStr.slice(0, str_length - 1)); // recur
  }
  helper(str); // calls helper function

  return result;
}

// reverse("string") // "gnirts"

/*
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
*/
