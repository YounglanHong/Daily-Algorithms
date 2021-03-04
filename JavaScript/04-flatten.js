// #04-flatten
// accepts an array of arrays(([1, 2, 3, [4, 5] ]))
// returns a new array with all values flattened

function flatten(arr) {
  let newArr = [];

  function checkArr(target) {
    for (let i = 0; i < target.length; i++) {
      if (Array.isArray(target[i])) {
        newArr = newArr.concat(checkArr(target[i]));
      } else {
        newArr.push(target[i]);
      }
    }
    console.log(newArr);
  }
  checkArr(arr);
  return newArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]

/* 
function flatten(arr){
  let newArr = [];
  
  for(let i=0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
       newArr = newArr.concat(flatten(arr[i]))
       console.log(arr, newArr);
    } else {
       newArr.push(arr[i])
    }
  }
  return newArr;
}
*/
