const _nullLaser = {
    x: null,
    y: null,
    dx: null,
    dy: null
};

export const deepDupBoard = (board) => (
  board.map(row => (
    [...row].map( el => el && el.slice())
  ))
);

export const findTank = board => {
  let tankX, tankY;
  board.forEach( (row, rowIdx) => (
    row.forEach( (el, colIdx) => {
      if (el === 'T') [tankX, tankY] = [colIdx, rowIdx];
    })
  ));

  return { tankX, tankY };
};

export const inBoardPos = (x, y, dx, dy) => (
  -1 < (x + dx) && (x + dx) < 10 &&
  -1 < (y + dy) && (y + dy) < 10
);

export const tryToMoveTank = (board, dx, dy) => {
  const { tankX, tankY} = findTank(board);
  if (!inBoardPos(tankX, tankY, dx, dy)) return board;

  const nextPosObj = board[tankY + dy][tankX + dx];

  switch (nextPosObj) {
    case 'S':
    case 'M':
      console.log('Can not move there...');
      break;
    case 'W':
      console.log('Game Over!');
      break;
    case 'F':
      console.log('You Won!');
      break;
    default:
      board[tankY + dy][tankX + dx] = 'T';
      board[tankY][tankX] = null;
      break;
  }

  return board;
};

export const tryToMoveLaser = (x, y, dx, dy) => {
  if (!inBoardPos(x, y, dx, dy)) return _nullLaser;
  console.log('in board!');
  return {
    x: x + dx,
    y: y + dy,
    dx,
    dy
  };
};