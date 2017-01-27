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
          [null,null,null,'S',null,null,null,null,null,null],
          [null,'T',null,'S',null,null,null,null,null,null],
          [null,null,null,'S',null,null,null,null,null,null],
          ['S',null,'S','S',null,null,null,null,null,null],
          [null,null,null,null,null,null,null,null,null,null],
          [null,null,null,null,null,null,null,null,null,null],
          [null,null,null,null,null,null,'S','S',null,'S'],
          [null,null,null,null,null,null,'S',null,null,null],
          [null,null,null,null,null,null,'S',null,'F',null],
          [null,null,null,null,null,null,'S',null,null,null]
        ],
        difficulty: 'Intro',
        author: 'Igor',
        message: 'You can move in four directions and fire a balls. Flag is the target that you must reach to end each level.'
      },
      2: {
        initialBoard: [
          [null,null,null,'W',null,null,null,null,null,null],
          [null,'T',null,'W',null,null,null,null,null,null],
          [null,null,null,'W',null,null,null,null,null,null],
          ['W','M','W','W',null,null,null,null,null,null],
          [null,null,null,null,null,null,null,null,null,null],
          [null,null,null,null,null,null,null,null,null,null],
          [null,null,null,null,null,null,null,null,null,null],
          [null,null,null,null,null,null,null,'W','W','W'],
          [null,null,null,null,null,null,null,'W','F','W'],
          [null,null,null,null,null,null,null,'W','W','W']
        ],
        difficulty: 'Intro',
        author: 'Igor',
        message: 'Orange block can be moved by being shot at with a ball. If it is pushed into water, it will form a bridge.'
      },
      3: {
        initialBoard: [
          ['W','W','W','W','W','W','W','W','W','W'],
          ['W','W','W','W','W','W','W','W','W','W'],
          ['W','W','W','W','W','W','W','W','W','W'],
          ['W','W',null,null,null,null,null,null,'W','W'],
          ['W','W',null,null,'W','W','M','W','W','W'],
          ['W','W','T',null,'W','F','M','W','W','W'],
          ['W','W',null,null,'W','W','W','W','W','W'],
          ['W','W','W','W','W','W','W','W','W','W'],
          ['W','W','W','W','W','W','W','W','W','W'],
          ['W','W','W','W','W','W','W','W','W','W']
        ],
        difficulty: 'Intro',
        author: 'Igor',
        message: 'You can shoot over water.'
      },
      4: {
        initialBoard: [
          [null,null,null,null,null,null,null,null,null,null],
          [null,'T',null,null,null,null,null,'M',null,null],
          [null,null,'W','W','W','W','W','W',null,null],
          [null,null,'W','W','W','W','W','W',null,null],
          [null,null,'W','W','F','F','W','W',null,null],
          [null,null,'W','W','F','F','W','W',null,null],
          [null,null,'W','W','W','W','W','W',null,null],
          [null,null,'W','W','W','W','W','W',null,null],
          [null,'M',null,null,null,null,null,null,null,null],
          [null,null,null,null,null,null,null,null,null,null]
        ],
        difficulty: 'Intro',
        author: 'Igor',
        message: 'You need to capture only one flag to pass the level'
      },
      5: {
        initialBoard: [
          ['F',null,'M',null,null,'M',null,'M',null,null],
          [null,null,'M',null,null,'M',null,'M',null,null],
          ['M','M','M','M','M','M','M','M','M','M'],
          [null,null,'M',null,null,'M',null,null,'M',null],
          [null,null,'M',null,null,'M',null,null,'M',null],
          ['M','M','M','M','M','M','M','M','M','M'],
          [null,null,null,'M',null,null,null,'M',null,null],
          ['M','M','M','M','M','M','M','M','M','M'],
          [null,null,null,'M',null,null,null,'M',null,null],
          [null,null,null,'M',null,null,null,'M',null,'T']
        ],
        difficulty: 'Intro',
        author: 'Igor',
        message: 'Shoot blocks away to find a path to flag'
      },
      6: {
        initialBoard: [
          ['S','S','S','S','S','S','S','S','S','S'],
          ['S',null,'T','S','F','F','S',null,'M','S'],
          ['W','M','M','S','W','W','S','M',null,'S'],
          ['S',null,null,'S','W','W','S',null,'M','S'],
          ['S',null,'M','S','W','W','S','M',null,'S'],
          ['S',null,null,'S','W','W','S',null,'M','S'],
          ['S',null,'M','S','W','W','S','M',null,'S'],
          ['S','M',null,'M',null,'M',null,'M',null,'S'],
          ['S',null,'M',null,null,null,null,null,null,'S'],
          ['S','S','S','S','S','S','S','S','S','S']
        ],
        difficulty: 'Intro',
        author: 'Igor',
        message: 'You can shoot over the water'
      },
      8: {
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
        author: '',
        message: 'Sometimes you need all blocks'
      },
      7: {
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
        author: 'MCK',
        message: ''
      },
      9: {
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
        author: 'MCK',
        message: ''
      },
      10: {
        initialBoard: [
          ['M','M','M','M','M','M','M','M','M','F'],
          ['M','M','M',null,null,'M','M','M','M','W'],
          ['M',null,null,null,'M',null,'M','M','M','W'],
          ['M',null,null,'M',null,null,null,'M','M','W'],
          ['M','M','M',null,'M','M',null,'M','M','W'],
          ['M','M',null,null,'M','M',null,'M','M','W'],
          ['M','M','M','M',null,'M',null,'M','W','W'],
          ['M','M',null,null,'M','M','T',null,'M','W'],
          ['M','M',null,null,'M','M',null,'M','M','M'],
          ['M','M','M',null,null,null,null,'M','M','M']
        ],
        difficulty: 'Hard',
        author: 'Simeon & Igor',
        message: ''
      },
      11: {
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
        difficulty: '',
        author: '',
        message: ''
      }
    },
    levelNumber: 1,
    levelDifficulty: "Medium",
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
