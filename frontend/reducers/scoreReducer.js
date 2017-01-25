import deepFreeze from 'deep-freeze';

import {
  MOVE_TANK,
  MOVE_LASER,
  RESET_LEVEL,
  SET_LEVEL } from '../actions/boardActions';

const _nullScore = {
  moves: 0,
  shots: 0
};

const scoreReducer = (state = _nullScore, action) => {
  deepFreeze(state);

  switch (action.type) {
    case RESET_LEVEL:
    case SET_LEVEL:
      return {
        moves: 0,
        shots: 0
      };
    case MOVE_TANK:
      return {
        ...state,
        moves: state.moves + 1
      };
    case MOVE_LASER:
      return {
        ...state,
        shots: state.shots + 1
      };
    default:
      return state;
  }
};

export default scoreReducer;
