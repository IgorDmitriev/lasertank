import { connect } from 'react-redux';
import Lasertank from './Lasertank';
import {
  moveUp, moveDown, moveRight, moveLeft,
  shootUp, shootDown, shootRight, shootLeft,
  moveLaserForward, setLevel, resetLevel, undo,
  moveTank, shootLaser } from '../actions/boardActions';

const mapStateToProps = state => {
  return {
    board: state.game.board.present,
    laser: state.game.laser,
    levelNumber: state.game.levelNumber,
    score: state.score,
    gameOver: state.game.gameOver,
    won: state.game.won,
    levelDifficulty: state.game.levelDifficulty
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moveUp: () => dispatch(moveUp()),
    moveDown: () => dispatch(moveDown()),
    moveLeft: () => dispatch(moveLeft()),
    moveRight: () => dispatch(moveRight()),
    shootUp: (board, x, y) => dispatch(shootUp(board, x, y)),
    shootDown: (board, x, y) => dispatch(shootDown(board, x, y)),
    shootLeft: (board, x, y) => dispatch(shootLeft(board, x, y)),
    shootRight: (board, x, y) => dispatch(shootRight(board, x, y)),
    moveLaserForward: () => dispatch(moveLaserForward()),
    setLevel: (levelNumber) => dispatch(setLevel(levelNumber)),
    resetLevel: () => dispatch(resetLevel()),
    undo: () => dispatch(undo()),
    moveTank: (dx, dy) => dispatch(moveTank(dx, dy)),
    shootLaser: (board, x, y, dx, dy) => dispatch(shootLaser(board, x, y, dx, dy))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lasertank);
