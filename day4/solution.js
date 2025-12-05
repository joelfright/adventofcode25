import readInput from '../helper.js';

export function solution() {
  const input = readInput(4).split('\r\n');
  let accessiblePaper = 0;
  let grid = [];
  const directions = [[1, -1], [1, 0], [1, 1], [0, -1], [0, 0], [0, 1], [-1, -1], [-1, 0], [-1, 1]]

  // Generate grid
  for (let i = 0; i < input.length; i++) {
    grid[i] = [];
    const column = input[i].split('')
    for (let j = 0; j < column.length; j++) {
      grid[i][j] = column[j];
    }
  }

  // Check grid
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '@') {
        let paperCount = 0;
        directions.forEach(direction => {
          if (row + direction[0] >= 0 && row + direction[0] < grid.length && col + direction[1] >= 0 && col + direction[1] < grid[row].length) {
            if (grid[row + direction[0]][col + direction[1]] === '@') {
              paperCount++;
            }
          }
        })
        if (paperCount <= 4) {
          accessiblePaper++;
        }
      }
    }
  }


  return `Part 1: ${accessiblePaper}`;
}