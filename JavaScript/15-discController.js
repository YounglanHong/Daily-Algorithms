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

  permuteJobs.forEach((jobs) => {å
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

// Solution #3
function solution(jobs) {
  // 🔑 작업에 걸린 평균시간이 가장 최소인 작업 순서
  // [요청시간, 소요시간]
  // 1) '하드디스크가 작업을 수행하고 있지 않을 때에는 먼저 요청이 들어온 작업부터 처리'
  // 2) 우선순위 큐: 작업에 걸린 평균시간이 가장 최소인 작업 순서
  // 조건: jobs 또는 priorQ 모두 처리
  
  let i = 0, time = 0, total = 0; // 현재시간과 소요시간
  // 1) 요청시간 기준으로 오름차순 정렬
  jobs.sort((a, b) => a[0] - b[0]); 
  
  // 2) 소요시간 기준 오름차순 정렬
  const priorQ = [];
  
  while(i < jobs.length || priorQ.length !== 0) {
      // console.log(priorQ);
      // 조건: 작업이 job 안에 있고, 현재시간보다 요청시간 작은 경우
      if(i < jobs.length && jobs[i][0] <= time) {
          priorQ.push(jobs[i++]);
          priorQ.sort((a, b) => a[1] - b[1]);
          continue;
      }
      // priorQ 안의 작업 처리
      if(priorQ.length !== 0) {
          time += priorQ[0][1];
          total += time - priorQ[0][0];
          priorQ.shift();
      } else {
          time = jobs[i][0];
      }
      // console.log("현재:", time," 소요:", total);
  }
  // 총 소요시간의 평균시간 반환(정수)
  return parseInt(total / jobs.length);
}

// solution([[0, 3], [1, 9], [2, 6]]) // 9

// ⭐️ 참고: Basics/Basic_Image/discController.png
