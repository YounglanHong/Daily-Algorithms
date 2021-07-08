# Big-O Notation(Big-O 표기법)

## Big-O 표기법

* Big-O 표기법: 알고리즘이 **최악의 경우**일 때 **시간**(실행 시간)과 **공간**(메모리)복잡도를 측정

  * 알고리즘의 **효율성** 판단 척도
  * `O(n)`에서 `n`은 **입력의 개수**

    ![Big-O Chart](../Basics/Basic_Image/big-O_chart.jpeg)

  1. `O(1)`: 상수 시간. 동일 입력에 대한 복잡도 변함 없음.
    ex) 배열의 요소를 인덱스를 사용하여 접근

      ```js
      let A = [1, 2, 3, 4, 5];

      A[0] = 1;
      ```
  2. `O(n)`: 선형 시간. 동일 입력에 대한 연산 n번 수행.
    ex) 배열의 요소를 0 ~ n-1까지 출력

      ```js
      for(let i = 0; i < N; i++) {
        console.log(i);
      }
      ```

  3. `O(n^2)`: 2차 시간. 동일 입력에 대한 연산 n^2번 수행.
    ex) 배열의 요소를 이중 루프로 출력

      ```js
      for(let i = 0; i < N; i++) {
        for(let j = i; j < N; j++) {
          console.log(j);
        }
      }
      ```

  3. `O(logN)`: 로그 시간. 동일 입력에 대한 연산 logN번 수행.
    ex) 2^2 ~ 2^n 까지 출력

      ```js
      // 2, 4, 8, 16, 32, 64...
      for(let i = 2; i <= N; i = i * 2) {
        console.log(i)
      }
      ```

  4. `O(∞)`: 무한 루프
    ex) 탈출(종료) 조건이 없는 while 문

      ```js
      function infiniteLoop(n) {
        while(true) {
          console.log(n);
        }
      }
      ```


## Big-O 표기법 규칙

  * 시간 복잡도 - `f(n)`

  i. 계수 법칙: 상수(k) 제거

  ```
  If f(n) = O(g(n)), then k * f(n) = O(g(n))
  (when k > 0) 
  ```

  * n과 연관되지 않은 상수(k)는 제거
    * n이 무한대 혹은 아주 큰 수에 가까울 때 상수(k) 연산은 무시 가능

  ```js
  // Big-O: O(n)
  function counter(n) {
    let count = 0;

    for(let i = 0; i < 5 * N; i++) {
      count += 1;
    } 
    count += 3;
    return count;
  }
  ```

  ii. 합의 법칙

  ```
  If f(n) = O(h(n)), g(n) = O(p(n)),
  then f(n) + g(n) = O(h(n) + p(n))
  ```
  * 상위 알고리즘의 빅오는 하위 알고리즘의 빅오 합
    * 합의 법칙 적용하고 계수 법칙 적용

  ```js
  // Big-O: O(n)
  function counter(n) {
    let count = 0;

    for(let i = 0; i < N; i++) {
      count += 1;
    }

    for(let i = 0; i < 5 * N; i++) {
      count += 1;
    } 
    return count;
  }
  ```

  iii. 곱의 법칙

  ```
  If f(n) = O(h(n)), g(n) = O(p(n)),
  then f(n) * g(n) = O(h(n) * p(n))
  ```

  ```js
  // Big-O: O(n^2)
  function counter(n) {
    let count = 0;

    for(let i = 0; i < N; i++) {
      count += 1;
      for(let j = 0; j < 5 * N; j++) {
        count += 1;
      }
    }
    return count;
  }
  ```

  iv. 다항 법칙

  ```
  If f(n)이 k차 다항식, 
  then f(n) = O(n^k)
  ```

  ```js
  // Big-O: O(n^2)
  function counter(n) {
    let count = 0;

    for(let i = 0; i < N * N; i++) { 
      count += 1;  // N * N
    }
    return count;
  }
  ```


***

### Reference

[Chap 3: Time Complexity | Codility](https://codility.com/media/train/1-TimeComplexity.pdf)

[<JavaScript Data Structures and Algorithms> by. Sammie Bae](https://www.amazon.com/-/ko/dp/1484239873/ref=pd_lpo_14_img_0/136-8036518-2120809?_encoding=UTF8&pd_rd_i=1484239873&pd_rd_r=679e973e-f229-4819-9d27-7f05b1d5ffb4&pd_rd_w=KQdTD&pd_rd_wg=ftb6V&pf_rd_p=fb1e266d-b690-4b4f-b71c-bd35e5395976&pf_rd_r=PW8Q00K68M9H7N00EFH7&psc=1&refRID=PW8Q00K68M9H7N00EFH7)

[Big O Notation: A Brief Overview for the Beginner | dev.to](https://dev.to/madisonstankevich/big-o-notation-a-brief-overview-for-the-beginner-1o13)

[Time complexity Big 0 for Javascript Array methods | dev.to](https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg)