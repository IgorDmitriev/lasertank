import { combineReducers } from 'redux';
import board from './boardReducer';
import laser from './laserReducer';

export default combineReducers({
  board,
  laser
});
