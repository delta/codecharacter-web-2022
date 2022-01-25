import React, { Component } from 'react';
import styled from 'styled-components';

const Body = styled.body`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #242a3c;
`;

export default function Leaderboard(): JSX.Element {
  return (
    <Body>
      <Team name="Hawks" />
      <Team name="Eagles" />
    </Body>
  );
}

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
  }

  increaseScore() {
    this.setState({
      score: this.state.score + 2,
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h1>{this.state.score}</h1>
        <button onClick={this.increaseScore}>+2</button>
      </div>
    );
  }
}
