import React from 'react';
import { findTank } from '../lib/board';

import Game from './Game';
import Rectangle from './Rectangle';

class Lasertank extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    window.addEventListener("keydown", (e) => {
      const { laser } = this.props;
      if (laser && laser.x !== null && laser.y !== null) {
        return null;
      }

      const { tankX, tankY } = findTank(this.props.board);
      switch (e.keyCode) {
        case 65:
          this.props.shootLeft(tankX, tankY);
          break;
        case 37:
          this.props.moveLeft();
          break;
        case 68:
          this.props.shootRight(tankX, tankY);
          break;
        case 39:
          this.props.moveRight();
          break;
        case 87:
          this.props.shootUp(tankX, tankY);
          break;
        case 38:
          this.props.moveUp();
          break;
        case 83:
          this.props.shootDown(tankX, tankY);
          break;
        case 40:
          this.props.moveDown();
          break;
      }
    });
  }

  componentDidUpdate () {
    const { laser } = this.props;
    if (laser && laser.x !== null && laser.y !== null) {
      setTimeout(this.props.moveLaserForward, 100);
    }
  }

  generateTiles () {
    const { board } = this.props;
    const tiles = [];

    board.forEach( (row, rowIdx) => {
      row.forEach( (el, colIdx) => {
        tiles.push(
          <Rectangle
            key={ `${colIdx}-${rowIdx}` }
            object={ el }
            x={ colIdx * 40 }
            y={ rowIdx * 40 }
            w={ 40 }
            h={ 40 } />
        );
      });
    });

    const { laser } = this.props;
    if (laser && laser.x !== null && laser.y !== null) {
      tiles.push(
        <Rectangle
          key={ `laser` }
          object={ 'L' }
          x={ laser.x * 40 + 10 }
          y={ laser.y * 40 + 10 }
          w={ 20 }
          h={ 20 } />
      );
    }

    return tiles;
  }

  render () {
    return (
      <div id="game">
        <Game>
          { this.generateTiles() }
        </Game>
      </div>
    );
  }
}

export default Lasertank;
