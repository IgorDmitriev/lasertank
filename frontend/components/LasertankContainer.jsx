import { connect } from 'react-redux';
import Lasertank from './Lasertank';
import {
  moveUp, moveDown, moveRight, moveLeft,
  shootUp, shootDown, shootRight, shootLeft,
  moveLaserForward } from '../actions/boardActions';

const mapStateToProps = state => {
  return {
    board: state.game.board,
    laser: state.game.laser
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
    moveLaserForward: (board) => dispatch(moveLaserForward(board))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lasertank);
