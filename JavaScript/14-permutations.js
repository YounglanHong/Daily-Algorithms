// 14-permutations
// recursion
// https://leetcode.com/problems/permutations/

/* (ref: https://www.youtube.com/watch?v=KukNnoN-SoY)
    1. 기존 배열(nums)에서 순서대로 숫자 하나씩 꺼내고,
    2. 결과 배열(answers)에 push 반복
    3. 기존 배열(nums)의 길이가 0이면 중단
    (시간 복잡도: O(n!))

    let nums = [1, 2, 3];
    temp/nums
    [1][2, 3] - [1, 2][3] - [1, 2, 3]
              - [1, 3][2] - [1, 3, 2]
    [2][1, 3] - [2, 1][3] - [2, 1, 3]
              - [2, 3][1] - [2, 3, 1]
    [3][1, 2] - [3, 1][2] - [3, 1, 2]
              - [3, 2][1] - [3, 2, 1]
*/

const permute = (nums, temp = [], answers = []) => {
  // push to answers when nums length equal 0
  if (!nums.length) answers.push([...temp]);

  for (let i = 0; i < nums.length; i++) {
    // filter current number
    const newNums = nums.filter((n, idx) => idx !== i);
    // push current number to temp
    temp.push(nums[i]);
    // recursion
    permute(newNums, temp, answers);
    // console.log(temp, newNums);
    // pop the last num ([1, 2] -> pop 2, push 3 -> [1, 3])
    temp.pop();
  }
  return answers;
};
