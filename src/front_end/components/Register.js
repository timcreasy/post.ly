import React from "react";
import RegisterForm from "./Register/RegisterForm";

let Register = React.createClass({

  createUser(user) {
    console.log("CREATE USER:", user);
  },

  render: function() {
    return (
      <div>
        <h1>Register</h1>
        <RegisterForm registerUser={this.createUser}/>
      </div>
    );
  }
});

module.exports = Register;