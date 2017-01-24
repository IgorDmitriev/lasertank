import React from 'react';

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
    // this.clearSelf();
  }

  render () {
    this.clearSelf();

    const { ctx, object, x, y, w, h, laserOver } = this.props;
    let color;

    switch (object) {
      case 'S':
        color = '#5A5A5A';
        break;
      case 'T':
        color = '#B86C99';
        break;
      case 'F':
        color = '#9068BE';
        break;
      case 'M':
        color = '#FF5A09';
        break;
      case 'W':
        color = '#92B4F4';
        break;
      case 'L':
        color = '#F45B69';
        break;
      default:
        color = '#F4FFE8';
        break;
    }
    console.log(x, y, object, laserOver);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);

    return null;
  }
}

export default Rectangle;
