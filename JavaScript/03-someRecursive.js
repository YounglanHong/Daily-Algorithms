// #03-someRecursive
// returns true if single value in the array returns true when passed to the callback, otherwise false

function someRecursive(arr, cb) {
  let result = false;
  arr.forEach((el) => {
    if (cb(el)) result = true;
  });
  return result;
}

// const isOdd = (el) => el % 2 !== 0;
// const isEven = (el) => el % 2 === 0;
// someRecursive([1, 3, 5, 6], isOdd);  // true
// someRecursive([1, 3, 5, 6], isEven);  // true
// someRecursive([1, 3, 5], isEven);  // false
