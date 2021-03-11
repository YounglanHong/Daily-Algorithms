# Stack

- **LIFO**(Last In, First Out)

  - 예시) 함수 호출(콜스택), 실행 취소/다시 실행(undo/redo), 라우팅(history 객체)

  ![Stack](./Basic_Image/Stack.png)

  ### Stack using Array

  - 배열을 사용하면 스택을 _빠르고 쉽게_ 표현 가능

  ```js
  let stack = [];
  // push & pop(efficient)
  stack.push("First");
  stack.push("Second");
  stack.push("Third");

  stack; // ["First", "Second", "Third"]

  stack.pop(); // "Third"
  stack.pop(); // "Second"
  stack.pop(); // "First"
  ```

  ```js
  let stack = [];
  // unshift & shift(inefficient; re-indexing)
  stack.unshift("First");
  stack.unshift("Second");
  stack.unshift("Third");

  stack; // ["First", "Second", "Third"]

  stack.shift(); // "Third"
  stack.shift(); // "Second"
  stack.shift(); // "First"
  ```

  ### Stack using Linked List

  - 배열보다 **연결 리스트**가 스택을 표현하기에 적합
    (index나 method가 필요 없기 때문에)

  ```js
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    // Add value to the top(beginning) of the stack(unshift)
    push(val) {
      let newNode = new Node(val);
      // if (!this.first) {
      if (this.size === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        let current = this.first;
        this.first = newNode; // Change first to new node
        newNode.next = current; // Connect new node to old first
      }
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
      // prefix increment
      return ++this.size; // return size;
    }

    // Remove value from the top(beginning) of the stack(shift)
    pop() {
      // if (!this.first) return null;
      if (this.size === 0) return null;
      let current = this.first;
      if (this.first === this.last) {
        this.last = null;
      } else {
        this.first = this.first.next;
      }
      this.size--;
      return current.val; // return value of node removed
    }
  }

  let stack = new Stack();
  stack.push("1️⃣");
  stack.push("2️⃣");
  stack.push("3️⃣");
  ```

## Big-O of Stack

| Methods           | Complexity of Stack | Complexity of Array |
| ----------------- | ------------------- | ------------------- |
| Insertion(push)   | **`O(1)`**          | `O(n)`              |
| Deletion(pop)     | **`O(1)`**          | `O(n)`              |
| Search(for value) | `O(n)`              | `O(n)`              |
| Access            | `O(n)`              | **`O(1)`**          |

💚[Big-O Cheatsheet](https://www.bigocheatsheet.com/)
