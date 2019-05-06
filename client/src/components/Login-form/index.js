import React from "react";

const LoginForm = () => {
  return (
    <div>
      <form>
        Username:
        <input type="text" name="name" placeholder="username" />
        Password:
        <input type="password" name="name" placeholder="password" />
      </form>

      <button>Login </button>
      <button>Add new user button</button>
    </div>
  );
};

export default LoginForm;
