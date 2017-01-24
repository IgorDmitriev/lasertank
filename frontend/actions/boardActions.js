export const MOVE_TANK = 'MOVE_TANK';
export const MOVE_LASER = 'MOVE_LASER';
export const MOVE_LASER_FORWARD = 'MOVE_LASER_FORWARD';

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

export const moveLaserForward = (board) => ({
  type: MOVE_LASER_FORWARD,
  board
});
