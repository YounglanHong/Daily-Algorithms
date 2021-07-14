
// memoization
// recursion(fib(n) = fib(n-1) + fib(n-2))
function fib(n, memo = [undefined, 1, 1]) {
  // if not undefined
  if (memo[n]) return memo[n];

  if (n <= 2) return 1;

  let result = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = result;
  // console.log(memo);
  return result;
}

// tabulation
// iteration(fib[n] = fib[n-1] + fib[n-2])
function fib(n) {
  if (n <= 2) return 1;

  let fibNums = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  // console.log(fibNums);
  return fibNums[n];
}

fib(10); // 55
fib(50); // 12586269025