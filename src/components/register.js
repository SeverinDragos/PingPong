import React, { Component } from "react";
import Axios from "axios";


class Register extends Component {
  history;
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirm_password: ""
    };
    Axios.defaults.baseURL = "https://github.com/LiviuNicu/angular-fmi-lab";
  }

  componentDidMount() {
    //dispatch = useDispatch();
  }

  register() {
    const newUser = {
    name: this.state.name,
    email: this.state.email,
    passwords: {
      password: this.state.password,
      confirm_password: this.state.confirm_password
    }
  };
  this.registerUserReq(newUser);
  }

  registerUserReq(user) {
    Axios.post("/user/register", user)
      .then(response => {
        window.location.replace("/login");
        console.log(response);
      })
      .catch(error => {});
  }

  render() {

    return (
      <div>
        <h1>{this.props.title}</h1>
        <div className="border p-4">
          {this.state.userInserted}

          <div className="form-group">
            <label>
              Name <small>{this.state.name}</small>
            </label>
            <input
              className="form-control"
              placeholder="Name .."
              onChange={ev => this.setState({ name: ev.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              placeholder="Email .."
              onChange={ev => this.setState({ email: ev.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              placeholder="Password .."
              onChange={ev => this.setState({ password: ev.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Password Again</label>
            <input
              className="form-control"
              placeholder="Password .."
              onChange={ev =>
                this.setState({ confirm_password: ev.target.value })
              }
            />
          </div>
          <button className="btn btn-success" onClick={() => this.register()}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
