import { combineReducers } from 'redux';
import game from './gameReducer';
import score from './scoreReducer';

export default combineReducers({
  game,
  score
});
