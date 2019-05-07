import React from "react";
import axios from "axios";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  login = () => {
    axios
      .post(
        `https://droom-buildweek-4-15-19.herokuapp.com/api/auth/login`,
        this.state
      )
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form>
          Username:
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          Password:
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>

        <button onClick={this.login}>Login </button>
        <button>Add new user button</button>
      </div>
    );
  }
}

export default LoginForm;
