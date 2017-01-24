import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ctx: null
    };
  }

  componentDidMount() {
    const c = document.getElementById("board");
    const ctx = c.getContext("2d");

    this.setState({ ctx });
  }

  mapChildren () {
    return React.Children.map(this.props.children, child => (
      React.cloneElement(child, {
        ctx: this.state.ctx
      })
    ));
  }

  render(){
    // this.state.ctx && this.state.ctx.clearRect(0, 0, 400, 400);

    return (
      <canvas id="board" width="400" height="400">
        { this.state.ctx ? this.mapChildren() : [] }
      </canvas>
    );
  }
}

export default Game;
