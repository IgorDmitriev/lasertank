import deepFreeze from 'deep-freeze';

import {
  MOVE_TANK,
  MOVE_LASER,
  MOVE_LASER_FORWARD } from '../actions/boardActions';
import { tryToMoveTank, tryToMoveLaser, deepDupBoard } from '../lib/board';

const _nullLaser = {
    x: null,
    y: null,
    dx: null,
    dy: null
};

const boardReducer = (state = _nullLaser, action) => {
  deepFreeze(state);

  switch (action.type) {
    case MOVE_LASER:
      let { x, y, dx, dy } = action;
      return tryToMoveLaser(x, y, dx, dy);
    case MOVE_LASER_FORWARD:
      let x1 = state.x;
      let y1 = state.y;
      let dx1 = state.dx;
      let dy1 = state.dy;

      return tryToMoveLaser(x1, y1, dx1, dy1);
    default:
      return state;
  }
};

export default boardReducer;
