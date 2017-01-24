import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

const _testState = {
  game: {
    board: [
      [null,null,null,null,null,null,null,null,null,null],
      [null,'T',null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null],
      [null,null,'M','M',null,null,null,null,null,null],
      [null,null,'M',null,null,null,null,null,null,null],
      [null,null,null,null,null,null,'S','S','S','S'],
      [null,null,null,'W','W','W','W','S','F',null],
      [null,null,null,null,null,null,null,null,null,null]],
    laser: {
      x: null,
      y: null,
      dx: null,
      dy: null
    }
  },
  tank: {
    x: 1,
    y: 1
  },
  score: {
    moves: 0,
    shots: 0
  }
};

const configureStore = (preloadedState = _testState) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;
