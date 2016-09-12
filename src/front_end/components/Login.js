import React from "react";
import LoginForm from "./Login/LoginForm";

let Login = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm />
      </div>
    );
  }
});

module.exports = Login;
