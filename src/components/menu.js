import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewGame from "../routes/newgame";
import Register from './register'
import Login from './login'

class Menu extends Component {
  render() {
    return(
      <Router>
        <div>
          <nav>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link className="nav-link" exact to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newgame">
                  New Game
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/history">
                  Game History
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/newgame" component={NewGame}>
            </Route>
            <Route path="/history">
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Menu;