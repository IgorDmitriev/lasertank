import React from 'react';

import Game from './Game';
import Rectangle from './Rectangle';

const App = () => (
  <div id="game">
    <Game>
      <Rectangle color={ '#666' } x={100} y={100} w={40} h={40} />
    </Game>
  </div>
);

export default App;
