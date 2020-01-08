import React, { Component } from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxpoints: props.points,
      player1: props.player1,
      player2: props.player2,
      player1points: 0,
      player2points: 0,
      gameOver: false
    }
    this.addPointsToPlayer1 = this.addPointsToPlayer1.bind(this);
    this.addPointsToPlayer2 = this.addPointsToPlayer2.bind(this);
  }

  addPointsToPlayer1() {
    this.setState(prevState => {
      return {player1points : prevState.player1points + 1}
    });
    console.log(this.state.player1points);
    console.log(this.state.maxpoints);
    if(this.state.player1points == this.state.maxpoints - 1) {
      console.log(this.state.gameOver);
      this.setState({gameOver : true, player1won: true});
      console.log(this.state.gameOver);
      let button = document.getElementById('scorebutton1');
      button.style.pointerEvents = 'none';
      button.color = "secondary";
      button = document.getElementById('scorebutton2');
      button.style.pointerEvents = 'none';
      button.color = "secondary";
    }
    console.log(this.state.gameOver);
  }

  addPointsToPlayer2() {
      this.setState(prevState => {
        return {player2points : prevState.player2points + 1}
      })
    if(this.state.player2points == this.state.maxpoints - 1) {
      this.setState({gameOver : true, player2won: true});
      let button = document.getElementById('scorebutton1');
      button.style.pointerEvents = 'none';
      button.color = "secondary";
      button = document.getElementById('scorebutton2');
      button.style.pointerEvents = 'none';
      button.color = "secondary";
    }
  }

  render() {
    let html;
    if (this.state.gameOver == true) {
      html = (
        <div>
        <font color='green'>{(this.state.player1won) ? this.state.player1 : this.state.player2} won!</font>
        <br/>
      </div>
      );
    }
    else {
      html = null;
    }
    return (
    <Container id='matchContainer'>
      <Row around="xs">
        <Col xs={2}>{this.state.player1}</Col>
        <Col xs={2}>{this.state.player2}</Col>
      </Row>
      <Row>
        <Col xs={2}>{this.state.player1points}</Col>
        <Col xs={2}>{this.state.player2points}</Col>
      </Row>
      <Row>
        <Col xs={2}><Button id='scorebutton1' color="danger" onClick={this.addPointsToPlayer1}>Scored</Button></Col>
        <Col xs={2}><Button id='scorebutton2' color="danger" onClick={this.addPointsToPlayer2}>Scored</Button></Col>
      </Row>
      {html}
    </Container>
    );
  }
}

export default Match;