import { connect } from 'react-redux';
import Lasertank from './Lasertank';
import {
  moveUp, moveDown, moveRight, moveLeft,
  shootUp, shootDown, shootRight, shootLeft,
  moveLaserForward } from '../actions/boardActions';

const mapStateToProps = state => {
  return {
    board: state.board,
    laser: state.laser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moveUp: () => dispatch(moveUp()),
    moveDown: () => dispatch(moveDown()),
    moveLeft: () => dispatch(moveLeft()),
    moveRight: () => dispatch(moveRight()),
    shootUp: (x, y) => dispatch(shootUp(x, y)),
    shootDown: (x, y) => dispatch(shootDown(x, y)),
    shootLeft: (x, y) => dispatch(shootLeft(x, y)),
    shootRight: (x, y) => dispatch(shootRight(x, y)),
    moveLaserForward: () => dispatch(moveLaserForward())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lasertank);
