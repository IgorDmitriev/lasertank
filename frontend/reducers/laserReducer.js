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
  const board = action.board ? deepDupBoard(action.board) : null;

  switch (action.type) {
    case MOVE_LASER:
      var { x, y, dx, dy } = action;
      return tryToMoveLaser(board, x, y, dx, dy);
    case MOVE_LASER_FORWARD:
      var { x, y, dx, dy } = state;
      return tryToMoveLaser(board, x, y, dx, dy);
    default:
      return state;
  }
};

export default boardReducer;
