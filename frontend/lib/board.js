import PF from 'pathfinding';

const _nullLaser = {
    x: null,
    y: null,
    dx: null,
    dy: null
};

export const deepDupBoard = (board) => {
  return board.map(row => (
      [...row].map( el => el && el.slice())
    ));
};

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
  x !== null && y !== null && dx !== null && dy !== null &&
  -1 < (x + dx) && (x + dx) < 10 &&
  -1 < (y + dy) && (y + dy) < 10
);

export const tryToMoveTank = (board, dx, dy) => {
  const { tankX, tankY} = findTank(board);
  if (!inBoardPos(tankX, tankY, dx, dy)) {
    return {
      board: {
        present: board
      }
    };
  }

  const nextPosObj = board[tankY + dy][tankX + dx];
  let gameOver = false,
      won = false;

  switch (nextPosObj) {
    case 'S':
    case 'M':
      console.log('Can not move there...');
      break;
    case 'W':
      console.log('Game Over!');
      gameOver = true;
      break;
    case 'F':
      console.log('You Won!');
      won = true;
      break;
    default:
      board[tankY + dy][tankX + dx] = 'T';
      board[tankY][tankX] = null;
      break;
  }

  return {
    board: {
      present: board
    },
    gameOver,
    won
  };
};

export const tryToMoveMovableBlock = (board, x, y, dx, dy) => {
  if (!inBoardPos(x, y, dx, dy)) return board;

  const nextPosObj = board[y + dy][x + dx];

  switch (nextPosObj) {
    case null:
      board[y + dy][x + dx] = 'M';
      board[y][x] = null;
      break;
    case 'W':
      board[y + dy][x + dx] = null;
      board[y][x] = null;
      break;
    default:
      break;
  }

  return board;
};

export const tryToMoveLaser = (board, x, y, dx, dy) => {
  if (!inBoardPos(x, y, dx, dy)) {
    return {
      board: {
        present: board
      },
      laser: _nullLaser
    };
  }

  const nextPosObj = board[y + dy][x + dx];

  switch (nextPosObj) {
    case 'S':
      return {
        board: {
          present: board
        },
        laser: _nullLaser
      };
    case 'M':
      let newBoard = tryToMoveMovableBlock(board, x + dx, y + dy, dx, dy);
      return {
        board: {
          present: newBoard
        },
        laser: _nullLaser
      };
    default:
      const newLaser = {
        x: x + dx,
        y: y + dy,
        dx,
        dy
      };
      return {
        board: {
          present: board
        },
        laser: newLaser
      };
  }




};

const buildMatrix = (board) => (
  board.map( (row, rowIdx) => (
    row.map( (el, colIdx) => {
      switch (el) {
        case null:
        case 'T':
        case 'F':
          return 0;
        default:
          return 1;
      }
    })
  ))
);

export const findPath = (board, x, y) => {
  const { tankX, tankY } = findTank(board);
  const matrix = buildMatrix(deepDupBoard(board));
  const grid = new PF.Grid(matrix);
  const finder = new PF.AStarFinder();
  const path = finder.findPath(tankX, tankY, x, y, grid);
  return path;
};
