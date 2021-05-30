function swap (idx1, idx2, arr) {
  // temp variable
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = arr[idx1];

  // destructuring
  // when arr is reference type
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // XOR operation
  // when arr is reference type

  arr[idx1] ^= arr[idx2];
  arr[idx2] ^= arr[idx1];
  arr[idx1] ^= arr[idx2];
}

