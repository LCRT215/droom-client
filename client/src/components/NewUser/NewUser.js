import React from "react";

const newUser = {
  border: "solid 2px pink",
  backgroundColor: "lightgrey"
};

class NewUser extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={newUser}>
        <h2> heyyyyyy from new user </h2>
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
          Password:
          <input
            type="password"
            name="password"
            placeholder="password"
            value="Password Input"
          />
        </form>

        <button>Add new user button</button>
      </div>
    );
  }
}

export default NewUser;
