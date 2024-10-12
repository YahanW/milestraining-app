import React, { useState, useEffect } from 'react';

const boardStyle = {
  display: 'inline-block',
  padding: '10px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(9, 40px)',
  gap: '1px',
  backgroundColor: '#888',
  border: '2px solid #888'
};

const cellStyle = {
  width: '40px',
  height: '40px',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const inputStyle = {
  width: '100%',
  height: '100%',
  border: 'none',
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const buttonStyle = {
  marginTop: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const SudokuBoard = ({ initialBoard }) => {
  const [board, setBoard] = useState(Array(9).fill().map(() => Array(9).fill(0)));
  const [initialCells, setInitialCells] = useState(new Set());

  useEffect(() => {
    if (initialBoard && initialBoard.length === 9 && initialBoard.every(row => row.length === 9)) {
      setBoard(initialBoard);
      const initial = new Set();
      initialBoard.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell !== 0) {
            initial.add(`${i}-${j}`);
          }
        });
      });
      setInitialCells(initial);
    } else {
      console.warn('Invalid initial board provided. Using default empty board.');
    }
  }, [initialBoard]);

  const handleCellChange = (row, col, value) => {
    if (!initialCells.has(`${row}-${col}`)) {
      const newBoard = [...board];
      newBoard[row][col] = value === '' ? 0 : parseInt(value, 10);
      setBoard(newBoard);
    }
  };

  const isValid = (board, row, col, num) => {
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num) return false;
    }
    for (let x = 0; x < 9; x++) {
      if (board[x][col] === num) return false;
    }
    let startRow = row - row % 3,
        startCol = col - col % 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i + startRow][j + startCol] === num) return false;
      }
    }
    return true;
  };

  const solveSudoku = (board) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num;
              if (solveSudoku(board)) {
                return true;
              } else {
                board[row][col] = 0;
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  const handleSolve = () => {
    const boardCopy = board.map(row => [...row]);
    if (solveSudoku(boardCopy)) {
      setBoard(boardCopy);
    } else {
      alert("No solution exists for this Sudoku puzzle.");
    }
  };

  return (
    <div style={boardStyle}>
      <div style={gridStyle}>
        {board.map((row, rowIndex) => 
          row.map((cell, colIndex) => (
            <div 
              key={`${rowIndex}-${colIndex}`} 
              style={{
                ...cellStyle,
                borderRight: (colIndex % 3 === 2 && colIndex !== 8) ? '2px solid #888' : 'none',
                borderBottom: (rowIndex % 3 === 2 && rowIndex !== 8) ? '2px solid #888' : 'none'
              }}
            >
              <input
                type="text"
                value={cell === 0 ? '' : cell}
                onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                style={{
                  ...inputStyle,
                  color: initialCells.has(`${rowIndex}-${colIndex}`) ? 'black' : 'blue'
                }}
                maxLength="1"
                readOnly={initialCells.has(`${rowIndex}-${colIndex}`)}
              />
            </div>
          ))
        )}
      </div>
      <button onClick={handleSolve} style={buttonStyle}>Solve Sudoku</button>
    </div>
  );
};

export default SudokuBoard;