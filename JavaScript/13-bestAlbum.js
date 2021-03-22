// 12-bestAlbum
// Hash
// https://programmers.co.kr/learn/courses/30/lessons/42579

// Solution #1 (채점 실패)
function solution(genres, plays) {
  const songs = [],
    total = {}; // 총 재생 횟수
  let result = [];
  let freq = {};

  // 곡 정보 해시 형태로 저장
  genres.forEach((g, i) => {
    songs.push({ index: i, genre: g, play: plays[i] });
    // 총 재생 횟수 저장
    if (!total[g]) {
      total[g] = plays[i];
    } else {
      total[g] += plays[i];
    }
  });

  // 비교(정렬) 함수
  // 🔑중복 처리
  const compareFunc = (a, b) => {
    // #1: 속한 노래가 많이 재생된 장르를 먼저 수록
    if (b.genre !== a.genre) {
      return total[b.genre] > total[a.genre]
        ? 1
        : total[b.genre] < total[a.genre]
        ? -1
        : 0;
    } else {
      // #2: 장르 내에서 많이 재생된 노래를 먼저 수록
      return b.play > a.play ? 1 : b.play < a.play ? -1 : 0;
      // #3: 재생 횟수가 같은 노래 중 고유 번호가 낮은 노래를 먼저 수록
      if (b.play === a.play) {
        return b.index > a.index ? 1 : b.index < a.index ? -1 : 0;
      }
    }
  };
  // 정렬
  songs.sort((a, b) => compareFunc(a, b));

  // 🔑장르별 2곡씩 저장
  songs.forEach((song, i) => {
    if (!freq[song.genre]) {
      freq[song.genre] = 1;
    } else {
      freq[song.genre]++;
    }
    if (freq[song.genre] > 2) {
      songs.splice(i, 1);
    }
  });
  for (let i in songs) {
    result.push(songs[i].index);
  }
  return result;
}
