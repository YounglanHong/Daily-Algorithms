// #03-someRecursive
// returns true if single value in the array returns true when passed to the callback, otherwise false

function someRecursive(arr, cb) {
  let result = false;
  arr.forEach((el) => {
    if (cb(el)) result = true;
  });
  return result;
}
