import deepFreeze from 'deep-freeze';

import {
  MOVE_TANK,
  MOVE_LASER,
  MOVE_LASER_FORWARD,
  RESET_LEVEL,
  SET_LEVEL  } from '../actions/boardActions';
import {
  tryToMoveTank,
  deepDupBoard,
  tryToMoveLaser } from '../lib/board';

const _nullState = {
  board: [[]],
  laser: {},
  levels: [[]],
  levelNumber: 0
};

const gameReducer = (state = _nullState, action) => {
  deepFreeze(state);
  const board = deepDupBoard(state.board);
  const { laser } = state;
  let newBoard, newState;

  switch (action.type) {
    case SET_LEVEL:
      if (!state.levels[action.levelNumber]) return state;
      return {
        ...state,
        board: state.levels[action.levelNumber],
        levelNumber: action.levelNumber
      };
    case RESET_LEVEL:
      console.log(state);
      return {
        ...state,
        board: state.levels[state.levelNumber]
      };
    case MOVE_TANK:
      const { dx, dy } = action;
      newBoard = tryToMoveTank(board, dx, dy);
      return {
        ...state,
        board: newBoard
      };
    case MOVE_LASER:
      var { x, y, dx, dy } = action;
      newState = tryToMoveLaser(board, x, y, dx, dy);
      return {
        ...state,
        ...newState
      };
    case MOVE_LASER_FORWARD:
      var { x, y, dx, dy } = state.laser;
      newState = tryToMoveLaser(board, x, y, dx, dy);
      return {
        ...state,
        ...newState
      };
    default:
      return state;
  }
};

export default gameReducer;
