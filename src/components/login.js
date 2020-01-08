import React, { Component } from "react";
import Axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    Axios.defaults.baseURL = "https://github.com/LiviuNicu/angular-fmi-lab";
  }

  register() {
    const newUser = {
    email: this.state.email,
    password: this.state.password
    }
  this.registerUserReq(newUser);
  }

  registerUserReq(user) {
    Axios.post("/login", user)
      .then(response => {
        window.location.replace("/");
        console.log(response);
      })
      .catch(error => {});
  }

  render() {
    return (
      <div>
        <div className="border p-4">
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" placeholder="Email .." onChange={ev =>
                this.setState({ email: ev.target.value })
              }/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" placeholder="Password .." onChange={ev =>
                this.setState({ password: ev.target.value })
              }/>
          </div>
          <button className="btn btn-success" onClick={() => this.register()}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;