// 후보키
// dfs, bit(조합)
// https://programmers.co.kr/learn/courses/30/lessons/42890

/* [이름, 전공, 학년]: 유일성 만족, 최소성 불만족 
    이름      전공    학년
   apeach   math     2
   apeach   music    2
   
   =>  전공 속성 제외하면 유일성 불만족
*/
function solution(relation) {
  // column: 속성, row: 튜플
  var answer = 0;
  let attr = new Set();
  let col_index = 0;  
  
  relation.forEach(row => {
    if(col_index < row.length) {
      attr.add(row[col_index])
      // console.log(col_index);
    } 
    col_index++;
  })
  console.log(attr.size)
  if(attr.size === relation.length) {
    answer++;
  }
  attr.clear()
  
  // console.log(answer)
  // console.log(attr.size)
  // return answer;
}