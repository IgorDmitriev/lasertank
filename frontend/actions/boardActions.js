export const MOVE_TANK = 'MOVE_TANK';
export const MOVE_LASER = 'MOVE_LASER';
export const MOVE_LASER_FORWARD = 'MOVE_LASER_FORWARD';
export const RESET_LEVEL = 'RESET_LEVEL';
export const SET_LEVEL = 'SET_LEVEL';
export const UNDO = 'UNDO';

export const moveTank = (dx, dy) => ({
  type: MOVE_TANK,
  dx,
  dy
});

export const undo = () => ({
  type: UNDO
});

export const setLevel = (levelNumber) => ({
  type: SET_LEVEL,
  levelNumber
});

export const resetLevel = () => ({
  type: RESET_LEVEL
});

export const moveUp = () => ({
  type: MOVE_TANK,
  dx: 0,
  dy: -1
});

export const moveDown = () => ({
  type: MOVE_TANK,
  dx: 0,
  dy: 1
});

export const moveRight = () => ({
  type: MOVE_TANK,
  dx: 1,
  dy: 0
});

export const moveLeft = () => ({
  type: MOVE_TANK,
  dx: -1,
  dy: 0
});

export const shootLaser = (board, x, y, dx, dy) => ({
  type: MOVE_LASER,
  board,
  x,
  y,
  dx,
  dy
});

export const shootUp = (board, x, y) => ({
  type: MOVE_LASER,
  board,
  x,
  y,
  dx: 0,
  dy: -1
});

export const shootDown = (board, x, y) => ({
  type: MOVE_LASER,
  board,
  x,
  y,
  dx: 0,
  dy: 1
});

export const shootRight = (board, x, y) => ({
  type: MOVE_LASER,
  board,
  x,
  y,
  dx: 1,
  dy: 0
});

export const shootLeft = (board, x, y) => ({
  type: MOVE_LASER,
  board,
  x,
  y,
  dx: -1,
  dy: 0
});

export const moveLaserForward = () => ({
  type: MOVE_LASER_FORWARD
});
