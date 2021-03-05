// #05-capitalizeFirst

function capitalizeFirst(arr) {
  return arr.map((el) => el[0].toUpperCase() + el.slice(1));
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

/* 
function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substring(1)]; 
  }
  const res = capitalizeFirst(array.slice(0, -1));  // Exclude last element
  let lastEl = array.slice(array.length - 1)[0];
  const string = lastEl[0].toUpperCase() + lastEl.substr(1);  // Capitalize last element
  res.push(string);  // Push capitalized element
  return res;
}
*/
