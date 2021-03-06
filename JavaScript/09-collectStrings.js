// 09-collectStrings
// accepts an object and returns an array of all values in the obj that is string

function collectStrings(obj) {
  let newArr = [];

  for (let key in obj) {
    let value = obj[key];
    if (typeof value === "string") {
      newArr.push(value);
    } else if (typeof value === "object" && !Array.isArray(value)) {
      // console.log("1️⃣", newArr);
      newArr = newArr.concat(collectStrings(value)); // newArr = (3) ["foo", "bar", "baz"]
      // console.log("2️⃣", newArr);
    }
  }
  return newArr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(obj); // ["foo", "bar", "baz"])
