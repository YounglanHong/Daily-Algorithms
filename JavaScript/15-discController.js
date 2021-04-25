// 15-discController
// Heap
// https://programmers.co.kr/learn/courses/30/lessons/42627

// Solution #1(signal: aborted (core dumped) -- memory error)
function solution(jobs) {
  let result = [];
  let totalTime,
    finishTime,
    totalAvg,
    jobsLength = jobs.length;
  let permuteJobs = permute(jobs, [], []);

  permuteJobs.forEach((jobs) => {
    totalTime = 0;
    for (let job of jobs) {
      finishTime = Math.abs(totalTime - job[0] + job[1]);
      totalTime += finishTime;
    }
    totalAvg = Math.floor(totalTime / jobsLength);
    result.push(totalAvg);
  });
  return Math.min(...result);
}

function permute(arr, temp, answer) {
  if (!arr.length) answer.push([...temp]);
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr.filter((n, idx) => idx !== i);
    temp.push(arr[i]);
    permute(newArr, temp, answer);
    temp.pop();
  }
  return answer;
}
