import deepFreeze from 'deep-freeze';

import {
  MOVE_TANK,
  MOVE_LASER,
  MOVE_LASER_FORWARD  } from '../actions/boardActions';
import {
  tryToMoveTank,
  deepDupBoard,
  tryToMoveLaser } from '../lib/board';

const _nullState = {
  board: [[]],
  laser: {}
};

const gameReducer = (state = _nullState, action) => {
  deepFreeze(state);
  const board = deepDupBoard(state.board);
  const { laser } = state;
  let newBoard, newState;

  switch (action.type) {
    case MOVE_TANK:
      const { dx, dy } = action;
      newBoard = tryToMoveTank(board, dx, dy);
      return {
        ...state,
        ...{
          board: newBoard
        }
      };
    case MOVE_LASER:
      var { x, y, dx, dy } = action;
      newState = tryToMoveLaser(board, x, y, dx, dy);
      return newState;
    case MOVE_LASER_FORWARD:
      var { x, y, dx, dy } = state.laser;
      newState = tryToMoveLaser(board, x, y, dx, dy);
      return newState;
    default:
      return state;
  }
};

export default gameReducer;
