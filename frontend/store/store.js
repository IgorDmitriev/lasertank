import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

const _testState = {
  game: {
    board: {
      past: [],
      present: [
                ['S','S','S','S','S','S','S','S','S','S'],
                [null,null,'S','S','S','S','S',null,null,'T'],
                ['W','W','W','W',null,null,null,'M','M',null],
                ['W','S','S','S','S',null,'S',null,'M',null],
                ['W','S','S','S','S',null,'S',null,'M',null],
                ['W','S','S',null,'M',null,'S','M',null,null],
                ['W','S','S',null,null,'M','S',null,'M',null],
                ['W','S','S',null,'M',null,null,'M',null,null],
                ['W','F','S',null,null,'S','S',null,null,null],
                ['S','S','S','S','S','S','S','S','S','S']
              ]
    },
    laser: {},
    levels: {
      1: {
        initialBoard: [
          ['S','S','S','S','S','S','S','S','S','S'],
          [null,null,'S','S','S','S','S',null,null,'T'],
          ['W','W','W','W',null,null,null,'M','M',null],
          ['W','S','S','S','S',null,'S',null,'M',null],
          ['W','S','S','S','S',null,'S',null,'M',null],
          ['W','S','S',null,'M',null,'S','M',null,null],
          ['W','S','S',null,null,'M','S',null,'M',null],
          ['W','S','S',null,'M',null,null,'M',null,null],
          ['W','F','S',null,null,'S','S',null,null,null],
          ['S','S','S','S','S','S','S','S','S','S']
        ],
        difficulty: 'Medium',
        author: ''
      },
      2: {
        initialBoard: [
          [null,null,'S',null,'W',null,'S',null,null,null],
          [null,'S','S','M','W','M','S','S',null,null],
          [null,'S',null,'M','W',null,null,'S',null,null],
          [null,'S',null,'M','W',null,null,'S',null,null],
          [null,'S',null,'M','W','M',null,'S',null,null],
          [null,'S',null,'T','W','M',null,'S',null,null],
          [null,'S','S',null,'W','M','S','S',null,null],
          [null,null,'S',null,'W',null,'S',null,null,null],
          [null,null,'S',null,'W',null,'S',null,null,null],
          [null,null,'S','S','F','S','S',null,null,null]
        ],
        difficulty: 'Easy',
        author: 'MCK'
      },
      3: {
        initialBoard: [
          ['S','S','S','S','S',null,null,'S','F','W'],
          [null,null,null,null,'M','M',null,'S','S','W'],
          [null,'S','M',null,null,'M',null,'S','S','W'],
          [null,'S',null,null,'S','M',null,'S','S','W'],
          [null,null,null,'S','S',null,null,'S','S','W'],
          ['S','S','M',null,'S',null,'S','S','S','W'],
          ['S','S',null,null,null,'M',null,'W','W','W'],
          [null,null,null,'M',null,'M','T','S',null,null],
          [null,'S',null,'S','S','S','S','S','S','S'],
          [null,null,null,'S',null,null,null,null,null,null]
        ],
        difficulty: 'Medium',
        author: 'MCK'
      },
      4: {
        initialBoard: [
          [null,null,null,null,null,null,null,null,null,null],
          [null,null,null,null,null,null,null,null,null,null],
          [null,null,null,null,null,null,null,null,null,null],
          [null,null,null,null,null,null,null,null,null,null],
          [null,null,null,null,null,null,null,null,null,null],
          [null,null,null,null,null,null,null,null,null,null],
          [null,null,null,null,null,null,null,null,null,null],
          [null,null,null,null,null,null,null,null,null,null],
          [null,null,null,null,null,null,null,null,null,null],
          [null,null,null,null,null,null,null,null,null,null]
        ],
        difficulty: 'Medium',
        author: 'MCK'
      }
    },
    levelNumber: 1,
    gameOver: false,
    won: false
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
