import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

const _testState = {
  game: {
    board: [
      ['S','S','S','S','S','S','S','S','S','S'],
      [null,null,'S','S','S','S','S',null,null,'T'],
      ['W','W','W','W',null,null,null,'M','M',null],
      ['W','S','S','S','S',null,'S',null,'M',null],
      ['W','S','S','S','S',null,'S',null,'M',null],
      ['W','S','S',null,'M',null,'S','M',null,null],
      ['W','S','S',null,null,'M','S',null,'M',null],
      ['W','S','S',null,'M',null,null,'M',null,null],
      ['W','F','S',null,null,'S','S',null,null,null],
      ['S','S','S','S','S','S','S','S','S','S']],
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
