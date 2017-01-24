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

export const shootUp = (x, y) => ({
  type: MOVE_LASER,
  x,
  y,
  dx: 0,
  dy: -1
});

export const shootDown = (x, y) => ({
  type: MOVE_LASER,
  x,
  y,
  dx: 0,
  dy: 1
});

export const shootRight = (x, y) => ({
  type: MOVE_LASER,
  x,
  y,
  dx: 1,
  dy: 0
});

export const shootLeft = (x, y) => ({
  type: MOVE_LASER,
  x,
  y,
  dx: -1,
  dy: 0
});

export const moveLaserForward = () => ({
  type: MOVE_LASER_FORWARD
});
