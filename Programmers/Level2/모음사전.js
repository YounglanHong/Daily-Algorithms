// 모음 사전
// https://programmers.co.kr/learn/courses/30/lessons/84512

// solution #1
function solution(word) {
  let words = 0;
  const alphabet = ['A','E','I','O','U'];
  // (A로 시작하는 4글자 단어 + A로 시작하는 1글자 단어) * 글자수(5) + 1(A 한글자)
  const count = [781, 156, 31, 6, 1]  // (((5 + 1) * 5 + 1) * 5 + 1) * 5 + 1
  word = [...word]
  
  for(let i = 0; i < word.length; i++){
      let index = alphabet.indexOf(word[i])
      words += (index * count[i] + 1)
  }
  return words;
}

/*
  A AA AAA AAAA
  AAAAA AAAAE AAAAI AAAAO AAAAU
  AAAE
  AAAEA AAAEE AAAEI AAAEO AAAEU
  AAAI
  AAAIA AAAIE AAAII AAAIO AAAIU
  AAAO
  AAAOA AAAOE AAAOI AAAOO AAAOU
  AAAU
  AAAUA AAAUE AAAUI AAAUO AAAUU
  AAE
  AAEA AAEE AAEI AAEO AAEU
  ...
*/
