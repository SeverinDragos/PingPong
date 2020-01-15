import { Button } from 'reactstrap';
import React, { Component } from "react";
import Match from './match';

class Gamepicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRender: props.shouldRender,
      gameLenght: 11,
      player1Name: "Player1",
      player2Name: "Player2"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({shouldRender: false})
  }

  render() {
    let html;
    if (this.state.shouldRender) {
      html = (
        <div className="container"><h4>Game type:</h4>
      <select id='gametype' defaultValue={11} onChange={ev => this.setState({ gameLenght: ev.target.value })} >
        <option value={11}>11 points</option>
        <option value={21}>21 points</option>
      </select>
      <h4>First player:</h4>
      <textarea id='Player1area' defaultValue='Player1' onChange={ev => this.setState({ player1Name: ev.target.value })}></textarea>
      <h4>Second player:</h4>
      <textarea id='Player2area' defaultValue='Player2' onChange={ev => this.setState({ player2Name: ev.target.value })}></textarea>
      <br/>
      <Button color='success' onClick={this.handleClick}>Let's play</Button>
      </div>);
    }
    else {
      html = (
        <Match points={this.state.gameLenght} 
                player1={this.state.player1Name} 
                player2={this.state.player2Name}/>
      );
    }

    return (
      <div className="container">
      {html}
      </div>
    );
  }
}

export default Gamepicker;