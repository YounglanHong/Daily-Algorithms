// 10-crossingTruck
// Queue
// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  let queue = new Array(bridge_length).fill(0); // 다리(0으로 초기화)
  let qWeight = 0; // 다리 무게 합계
  let time = 0; // [반환값] 경과 시간
  let truck = truck_weights.shift(); // 현재 지나가는 트럭 무게(시작)

  function init() {
    queue.unshift(truck); // 큐 맨 앞에 추가
    queue.pop(); // 큐 맨 뒤 0 제거
    qWeight += truck;
    time++;
  }
  init();
  // console.log(qWeight, queue, time)

  while (qWeight) {
    qWeight -= queue.pop();
    truck = truck_weights.shift(); // 현재 지나가는 트럭 무게(이동)

    if (qWeight + truck <= weight) {
      queue.unshift(truck);
      qWeight += truck;
    } else {
      queue.unshift(0);
      truck_weights.unshift(truck);
    }
    time++;
    // console.log(qWeight, queue, time)
  }
  return time;
}
