import { Button } from 'reactstrap';
import React, { Component } from "react";
import Match from './match';

class Gamepicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRender: props.shouldRender
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
      <select id='gametype' defaultValue={11}>
        <option value={11}>11 points</option>
        <option value={22}>21 points</option>
      </select>
      <h4>First player:</h4>
      <textarea id='Player1area' defaultValue='Player1'></textarea>
      <h4>Second player:</h4>
      <textarea id='Player2area' defaultValue='Player2'></textarea>
      <br/>
      <Button color='success' onClick={this.handleClick}>Let's play</Button>
      </div>);
    }
    else {
      html = (
        <Match points={document.getElementById('gametype').value} 
                player1={document.getElementById('Player1area').value} 
                player2={document.getElementById('Player2area').value}/>
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