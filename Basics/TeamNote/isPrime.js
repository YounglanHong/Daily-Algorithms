// Time complexity: O(N)
function isPrime(num) {
  if(num === 2) return true;

  for(let i = 2; i < num / 2; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

// Time complexity: O(√ N) 
function isPrime(num) {
  let result = false;
  if(num === 2) return true;

  for(let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
    if(num % i === 0) {
      result = false;
      // break;
    } else {
      result = true;
    }
  }
  return result;
}

// https://junkim.netlify.app/posts/programmers0807
// Time complexity: O(n log log n)
function solution(n) {
  const arr = [];

  for(let i = 0; i < n+1; i++) {
    arr.push(true);
  }
  for(let i = 2; i * i < n; i++) {
    if(arr[i]) {
      for(let j = 1 * 1; j <= n; j++) {
        arr[j] = false;
      }
    }
  }
}

// https://blog.naver.com/ndb796/221233595886
function isPrime(num) {
  const arr = new Array(num + 1);
  for(let i = 2; i <= num; i++) {
    arr[i] = i;
  }

  for(let i = 2; i <= num; i++) {
    if(arr[i] === 0) continue;

    for(let j= i + i; j <= num; j+= i) {
      arr[j] = 0;
    }
  }
  return arr[num] !== 0 ? true : false
}

// https://codility.com/media/train/9-Sieve.pdf
// function isPrime(n) {
//   let arr = Array.from(Array(n+1), () => true);

//   arr[0] === false;
//   arr[1] === false;

//   let i = 2;

//   while(i * i <= n) {
//     if(arr[i]) {
//       let k = i * i;
//       while(k <= n) {
//         arr[i] = false;
//         k += i;
//       }
//       i++;
//     }
    
//   }
//   console.log(arr[n])
// }

// https://sustainable-dev.tistory.com/31

// https://sustainable-dev.tistory.com/32

function isPrime(n) {
  const arr = new Array(n+1).fill(true);
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if(arr[i]) {
      // i 의 배수 false
      for(let j = Math.pow(i, 2); j <= n; j+= i) {
        arr[j] = false;
      }
    }
  }
  console.log(arr)
}