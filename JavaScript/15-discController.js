// 15-discController
// Heap(Priority Queue)
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

// Solution #2
// 🔑우선순위큐에 있는 작업 중 소요시간이 작은 작업부터 실행
// https://kyun2da.github.io/2020/07/21/diskController/
function solution(jobs) {
  let totalTime = 0,
    cost = 0,
    totalCost = 0;
  // 1) 요청시간을 기준으로 오름차순 정렬
  jobs.sort((a, b) => a[0] - b[0]);
  // 요청시간을 우선순위 큐에 push
  const priorityQ = [];
  for (let job of jobs) {
    priorityQ.push(job);
  }
  // 소요시간을 기준으로 큐 오름차순 정렬
  priorityQ.sort((a, b) => a[1] - b[1]);
  priorityQ.forEach((task) => {
    // 대기시간 + 소요시간
    cost = totalTime - task[0] + task[1];
    totalTime += task[1];
    totalCost += cost;
    // console.log(totalTime, cost, totalCost)
  });
  let avgTime = Math.floor(totalCost / jobs.length);
  return avgTime;
}

// solution([[0, 3], [1, 9], [2, 6]]) // 9
// solution([[0, 4], [0, 3], [0, 2], [0, 1]]) // 6
