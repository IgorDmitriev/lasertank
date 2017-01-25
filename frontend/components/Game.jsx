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
    return (
      <canvas id="board" width="1200px" height="1200px">
        { this.state.ctx ? this.mapChildren() : [] }
      </canvas>
    );
  }
}

export default Game;
