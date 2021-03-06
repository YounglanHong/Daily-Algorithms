// #07-nestedEvenSum
// Return the sum of all even numbers in an object which may contain nested objects

function nestedEvenSum(obj) {
  let sum = 0;
  function helper(helperObj) {
    for (let el of Object.values(helperObj)) {
      // if (!el) return; // If el is undefined, return null(base case)
      // If element is even number, add up to sum
      if (typeof el === "number" && el % 2 === 0) {
        sum += el;
        // If element is object, recur
      } else if (typeof el === "object") {
        helper(Object.values(el));
      }
    }
  }
  helper(obj);
  return sum;
}

/*
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

*/

function nestedEvenSum(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key]; // If element is even number, add up to sum
    } else if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]); // If element is object, add recur to sum
    }
  }
  return sum;
}
