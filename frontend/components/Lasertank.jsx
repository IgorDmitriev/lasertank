import React from 'react';
import { findTank, findPath } from '../lib/board';
import Game from './Game';
import Rectangle from './Rectangle';


class Lasertank extends React.Component {
  constructor (props) {
    super(props);

  }

  componentDidMount () {
    this.props.setLevel(1);

    window.addEventListener("keydown", (e) => {
      const { laser, board } = this.props;
      if (laser && laser.x !== null && laser.y !== null) {
        console.log('Can not move while laser on board!');
        return null;
      }
      if (!board) return null;

      const { tankX, tankY } = findTank(board);
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
    const canvas = document.getElementById("board");
    canvas.addEventListener('click', e => {
      const x = Math.floor(e.layerX / 60);
      const y = Math.floor(e.layerY / 60);
      console.log('click:', x, y);

      const { laser, board } = this.props;
      if (laser && laser.x !== null && laser.y !== null) {
        console.log('Can not move while laser on board!');
        return null;
      }

      const moves = findPath(board, x, y);
      if (moves.length === 0) {
        console.log('Can not move there');
        return;
      }

      let tankX = moves[0][0];
      let tankY = moves[0][1];
      let dx, dy;
      moves.slice(1).forEach( (pos, idx) => {
        setTimeout( () => {
          this.moving = true;
          dx = pos[0] - tankX;
          dy = pos[1] - tankY;
          [tankX, tankY] = pos;
          console.log(dx, dy);
          this.props.moveTank(dx, dy);
          this.moving = false;
        }, 100*idx);
      });

    });

    canvas.addEventListener('contextmenu', e => {
      e.preventDefault();
      const { laser, board } = this.props;
      if (laser && laser.x && laser.y) {
        console.log('Can not shoot while laser on board!');
        return null;
      }
      console.log('moving', this.moving);
      if (this.moving) {
        console.log('Can not shoot while moving');
        return null;
      }
      const x = Math.floor(e.layerX / 60);
      const y = Math.floor(e.layerY / 60);

      const { tankX, tankY } = findTank(this.props.board);
      let dx = tankX - x;
      let dy = tankY - y;
      console.log(dx, dy);
      if (Math.abs(dx) < Math.abs(dy)) {
        if (dy > 0) {
          this.props.shootUp(board, tankX, tankY);
        } else {
          this.props.shootDown(board, tankX, tankY);
        }
      } else {
        if (dx < 0) {
          this.props.shootRight(board, tankX, tankY);
        } else {
          this.props.shootLeft(board, tankX, tankY);
        }
      }
    });
  }

  componentDidUpdate () {
    const { laser, board } = this.props;
    if (laser && laser.x !== null && laser.y !== null) {
      setTimeout(this.props.moveLaserForward, 50);
    }

    if (this.props.won) {
      this.props.setLevel(this.props.levelNumber + 1);
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
            x={ colIdx * 120 }
            y={ rowIdx * 120 }
            w={ 120 }
            h={ 120 }
            laserOver={ laserOver } />
        );
      });
    });

    if (laser && laser.x !== null && laser.y !== null) {
      tiles.push(
        <Rectangle
          key={ `laser` }
          object={ 'L' }
          x={ laser.x * 120 + 40 }
          y={ laser.y * 120 + 40 }
          w={ 40 }
          h={ 40 } />
      );
    }

    return tiles;
  }

  render () {
    return (
      <div className="game">
        <div className="game-control">
          <button
            className="reset-button"
            onClick={ this.props.resetLevel }>
            Reset
          </button>
          <button
            className="next-button"
            onClick={ this.props.setLevel.bind(null, this.props.levelNumber + 1)}>
            Next Level
          </button>
          <button
            className="prev-button"
            onClick={ this.props.setLevel.bind(null, this.props.levelNumber - 1)}>
            Prev Level
          </button>
          <button
            className="undo-button"
            onClick={ this.props.undo }>
            Undo
          </button>
        </div>
        <Game>
          { this.generateTiles() }
        </Game>
        <div className="level-status">
          <div className="level-number-label">
            Level Number
          </div>
          <div className="level-number-value">
            { this.props.levelNumber }
          </div>
          <div className="level-author-label">
            Author
          </div>
          <div className="level-author-value">
            { this.props.gameOver.toString() }
            { this.props.won.toString() }
          </div>
          <div className="level-moves-label">
            Moves
          </div>
          <div className="level-moves-value">
            { this.props.score.moves }
          </div>
          <div className="level-shots-label">
            Shots
          </div>
          <div className="level-shots-value">
            { this.props.score.shots }
          </div>
        </div>
      </div>
    );
  }
}

export default Lasertank;
