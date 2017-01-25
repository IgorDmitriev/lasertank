import deepFreeze from 'deep-freeze';

import {
  MOVE_TANK,
  MOVE_LASER,
  MOVE_LASER_FORWARD,
  RESET_LEVEL,
  SET_LEVEL,
  UNDO } from '../actions/boardActions';
import {
  tryToMoveTank,
  deepDupBoard,
  tryToMoveLaser } from '../lib/board';

const _nullState = {
  board: {
    past: [],
    present: [[]]
  },
  laser: {},
  levels: {},
  levelNumber: 0,
  gameOver: false,
  won: false
};

const gameReducer = (state = _nullState, action) => {
  console.log(action);
  console.log(state);

  deepFreeze(state);
  const board = deepDupBoard(state.board.present);
  const dupPast = state.board.past.slice();
  const { laser } = state;
  let newBoard, newState;

  switch (action.type) {
    case UNDO:
      if (state.board.past.length === 0) return state;
      const previous = dupPast[dupPast.length - 1];
      const undoPast = dupPast.slice(0, dupPast.length - 1);
      return {
        ...state,
        board: {
          past: undoPast,
          present: previous
        }
      };
    case SET_LEVEL:
      if (!state.levels[action.levelNumber]) return state;
      return {
        ...state,
        board: {
          past: [],
          present: state.levels[action.levelNumber].initialBoard
        },
        levelNumber: action.levelNumber,
        gameOver: false,
        won: false
      };
    case RESET_LEVEL:
      console.log(state);
      return {
        ...state,
        board: {
          past: [],
          present: state.levels[state.levelNumber].initialBoard
        },
        gameOver: false,
        won: false
      };
    case MOVE_TANK:
      dupPast.push(state.board.present);
      const { dx, dy } = action;
      newState = tryToMoveTank(board, dx, dy);

      newState.board['past'] = dupPast;
      return {
        ...state,
        ...newState
      };
    case MOVE_LASER:
      dupPast.push(state.board.present);
      var { x, y, dx, dy } = action;
      newState = tryToMoveLaser(board, x, y, dx, dy);
      newState.board['past'] = dupPast;
      return {
        ...state,
        ...newState
      };
    case MOVE_LASER_FORWARD:
      var { x, y, dx, dy } = state.laser;
      newState = tryToMoveLaser(board, x, y, dx, dy);
      newState.board['past'] = dupPast;
      return {
        ...state,
        ...newState
      };
    default:
      return state;
  }
};

export default gameReducer;
