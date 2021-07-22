// 130. Surrounded Regions
// bfs, dfs, union find, matrix
// https://leetcode.com/problems/surrounded-regions/

// 1. Mark every '0' in the boundary of the board to '#'
// 1-1. If 'X', continue
// 1-2. If 'O', flip to 'X'
// 1-3. If '#', flip to 'O'
// 2. Check visited elements on the board
// 3. Return new board

var solve = function(board) {
  const M = board.length;
  const N = (board[0] || []).length;

  // Search the boundary('O' to '#')
  for(let i = 0; i < M; i++) {
    dfs(i, 0);
    dfs(i, N-1);
  }

  for(let j = 0; j < N; j++) {
    dfs(0, j);
    dfs(M-1, j);
  }

  /*
  console.log(board)
  [
  [ 'X', 'X', 'X', 'X' ],
  [ 'X', 'O', 'O', 'X' ],
  [ 'X', 'X', 'O', 'X' ],
  [ 'X', '#', 'X', 'X' ]
  ] */


  // Search inside the board('O' to 'X')
  for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
      if(board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }

  // Bring '#' back to 'O' on the boundary
  for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
      if(board[i][j] === '#') {
        board[i][j] = 'O';
      }
    }
  }


  function dfs(x, y) {
    // Region outside the board
    const borderCondition = x >= 0 && x < M && y >= 0 && y < N && board[x][y] === 'O'
    if(!borderCondition) return;

    board[x][y] = '#';
    // Check up, down, left, right
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }

  // console.log(board)
  return board;
};


/*
describe("Flip all 'O's into 'X's in surrounded region"), () => {
  test("given matrix [["X"]]"), () => {
    expect([["X"]]).toEqual([["X"]])
  });

  test("given matrix [["O","O"],["O","O"]]"), () => {
    expect([["O","O"],["O","O"]]).toEqual([["O","O"],["O","O"]])
  });

  test("given matrix [["X","O","X"],["X","O","X"],["X","O","X"]]"), () => {
    expect([["X","O","X"],["X","O","X"],["X","O","X"]])
    .toEqual([["X","O","X"],["X","O","X"],["X","O","X"]])
  });

}
*/
