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
      const { laser, board } = this.props;
      if (laser && laser.x !== null && laser.y !== null) {
        return null;
      }
      if (!board) return null;

      const { tankX, tankY } = findTank(this.props.board);
      switch (e.keyCode) {
        case 65:
          this.props.shootLeft(board, tankX, tankY);
          break;
        case 37:
          this.props.moveLeft();
          break;
        case 68:
          this.props.shootRight(board, tankX, tankY);
          break;
        case 39:
          this.props.moveRight();
          break;
        case 87:
          this.props.shootUp(board, tankX, tankY);
          break;
        case 38:
          this.props.moveUp();
          break;
        case 83:
          this.props.shootDown(board, tankX, tankY);
          break;
        case 40:
          this.props.moveDown();
          break;
      }
    });
  }

  componentDidUpdate () {
    const { laser, board } = this.props;
    if (laser && laser.x !== null && laser.y !== null) {
      setTimeout(this.props.moveLaserForward.bind(null, board), 50);
    }
  }

  generateTiles () {
    console.log('Going to render tiles');
    const { laser, board } = this.props;
    const tiles = [];

    board.forEach( (row, rowIdx) => {
      row.forEach( (el, colIdx) => {
        let laserOver = false;
        if (laser && laser.x === colIdx && laser.y === rowIdx) {
          laserOver = true;
        }

        tiles.push(
          <Rectangle
            key={ `${colIdx}-${rowIdx}` }
            object={ el }
            x={ colIdx * 40 }
            y={ rowIdx * 40 }
            w={ 40 }
            h={ 40 }
            laserOver={ laserOver } />
        );
      });
    });

    if (laser && laser.x !== null && laser.y !== null) {
      tiles.push(
        <Rectangle
          key={ `laser` }
          object={ 'L' }
          x={ laser.x * 40 + 15 }
          y={ laser.y * 40 + 15 }
          w={ 10 }
          h={ 10 } />
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
