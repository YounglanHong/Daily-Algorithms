// #06-capitalizedWords

function capitalizeWords(arr) {
  return arr.map((el) => el.toUpperCase());
}

/* 
function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  const res = capitalizeWords(arr.slice(0, -1)); // Exclude last element
  const str = arr.slice(arr.length - 1)[0].toUpperCase(); // Capitalize last element
  res.push(str);
  return res;
}
*/
