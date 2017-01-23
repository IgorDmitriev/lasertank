import React from 'react';

class Rectangle extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { ctx, color, x, y, w, h } = this.props;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);

    return null;
  }
}

export default Rectangle;
