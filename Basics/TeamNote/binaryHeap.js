function swap(idx1, idx2, arr) {
  let temp = arr[idx1];

  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function parentIdx(idx) {
  return Math.floor((idx - 1) / 2);
}

function leftChildIdx(idx) {
  return idx * 2 + 1;
}

function rightChildIdx(idx) {
  return idx * 2 + 2;
}

function insert(heap, item) {
  heap.push(item);

  let curIdx = heap.length - 1;
  let pIdx = parentIdx(curIdx);

  // max heap
  while(pIdx >= 0 && heap[curIdx] > heap[pIdx]) {
    swap(curIdx, pIdx, heap);
      curIdx = pIdx;
      pIdx = parentIdx(curIdx);
  }
  return heap;
}

function binaryHeap(arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, [])
}


// binaryHeap([100, 19, 36, 17, 3, 25, 1, 2, 7])
// insert([100, 19, 36, 17, 3, 25, 1, 2, 7], 101)
// [101, 100, 36, 17, 19, 25, 1, 2, 7, 3]