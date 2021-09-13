// 숫자 문자열과 영단어
// https://programmers.co.kr/learn/courses/30/lessons/81301#

// solution #1
function solution(s) {
  const numberWords = [
      "zero", "one", "two", "three", "four", 
      "five", "six", "seven", "eight", "nine" ];
  
  for(let num in numberWords) {
      let regEx = new RegExp(numberWords[num], "gi")
          s = s.replace(regEx, num);
  }
  return Number(s);
}

// solution #2
function solution(s) {
  const numberWords = [
      "zero", "one", "two", "three", "four", 
      "five", "six", "seven", "eight", "nine" ];
  
  for(let i in numberWords) {
      let temp = s.split(numberWords[i]);
      // console.log(i, temp, temp.join(i))
      s = temp.join(i)
  }
  return Number(s);
}