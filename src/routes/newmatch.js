import React, { Component } from 'react';
import Match from '../components/match';

class NewMatch extends Component {

  constructor(props) {
    super(props)
    this.state = {
      maxpoints: props.location.state.maxpoints,
      player1: props.location.state.player1,
      player2: props.location.state.player2,
    }
  }

  componentDidMount() {
    console.log("received " + this.props.location.state.maxpoints);
    console.log("received " + this.props.location.state.player1);
    console.log("received " + this.props.location.state.player1);

  }

  render() {
    return (
    <Match maxpoints={this.state.maxpoints} player1={this.state.player1} player2={this.state.player2}/>
    );
  }
}

export default NewMatch;