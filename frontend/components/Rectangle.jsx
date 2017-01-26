import React from 'react';
import * as Sprites from '../lib/sprites';

const propTypes = {
  ctx: React.PropTypes.instanceOf(CanvasRenderingContext2D),
  color: React.PropTypes.string,
  x: React.PropTypes.number,
  y: React.PropTypes.number,
  w: React.PropTypes.number,
  h: React.PropTypes.number
};

class Rectangle extends React.Component {
  constructor (props) {
    super(props);
  }

  shouldComponentUpdate (nextProps, nextState) {
    return (this.props.object !== nextProps.object ||
            this.props.x !== nextProps.x ||
            this.props.y !== nextProps.y ||
            this.props.laserOver !== nextProps.laserOver);
  }

  clearSelf (){
    const { ctx, x, y, w, h } = this.props;
    ctx.clearRect(x, y, w, h);
  }

  componentWillUnmount(){
  }

  render () {
    // this.clearSelf();

    const { ctx, object, x, y, w, h, laserOver } = this.props;

    switch (object) {
      case 'S':
        Sprites.drawGround(ctx, x, y, w, h);
        Sprites.drawSolidBlock(ctx, x, y, w, h);
        break;
      case 'T':
        Sprites.drawGround(ctx, x, y, w, h);
        Sprites.drawTank(ctx, x, y, w, h);
        break;
      case 'F':
        Sprites.drawGround(ctx, x, y, w, h);
        Sprites.drawFlag(ctx, x, y, w, h);
        break;
      case 'M':
        Sprites.drawGround(ctx, x, y, w, h);
        Sprites.drawMovableBlock(ctx, x, y, w, h);
        break;
      case 'W':
        Sprites.drawWater(ctx, x, y, w, h);
        break;
      case 'L':
        Sprites.drawLaser(ctx, x, y, w, h);
        break;
      default:
        Sprites.drawGround(ctx, x, y, w, h);
        break;
    }

    return null;
  }
}

export default Rectangle;
