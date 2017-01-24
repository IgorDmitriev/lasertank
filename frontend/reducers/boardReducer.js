import deepFreeze from 'deep-freeze';

import { MOVE_TANK } from '../actions/boardActions';
import { tryToMoveTank, deepDupBoard } from '../lib/board';

const boardReducer = (state = [[]], action) => {
  deepFreeze(state);
  const board = deepDupBoard(state);

  switch (action.type) {
    case MOVE_TANK:
      const { dx, dy } = action;
      return tryToMoveTank(board, dx, dy);
    default:
      return state;
  }
};

export default boardReducer;
