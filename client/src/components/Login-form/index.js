import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
          Username:
          <input
            type="text"
            name="username"
            placeholder="username"
            value="Username Input"
          />
          Password:
          <input
            type="password"
            name="password"
            placeholder="password"
            value="Password Input"
          />
        </form>

        <button>Login </button>
        <button>Add new user button</button>
      </div>
    );
  }
}

export default LoginForm;
