const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  
  let currentPlayer = 'X';
  
  function checkWinner() {
    const winPatterns = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ];
  
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        board[a[0]][a[1]] &&
        board[a[0]][a[1]] === board[b[0]][b[1]] &&
        board[a[0]][a[1]] === board[c[0]][c[1]]
      ) {
        return true;
      }
    }
  
    return false;
  }
  
  function checkTie() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!board[i][j]) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  function makeMove(row, col) {
    if (!board[row][col]) {
      board[row][col] = currentPlayer;
      document.getElementById(`cell-${row}-${col}`).innerText = currentPlayer;
  
      if (checkWinner()) {
        document.getElementById('board').classList.add('disabled');
        setTimeout(() => {
          alert(`Player ${currentPlayer} wins!`);
        }, 100);
      } else if (checkTie()) {
        document.getElementById('board').classList.add('disabled');
        setTimeout(() => {
          alert('It\'s a tie!');
        }, 100);
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }
  