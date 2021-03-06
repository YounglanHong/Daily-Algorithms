// 08-stringifyNumbers
// finds all values which are numbers and converts them to strings

function stringifyNumbers(obj) {
  let newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString(); // If element is number, stringify
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]); // If element is object(not array), recur
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

/* 
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

stringifyNumbers(obj);
*/
