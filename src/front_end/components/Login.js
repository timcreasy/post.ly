import React from "react";
import LoginForm from "./Login/LoginForm";

let Login = React.createClass({

  getUser(token) {
    $.ajax({
      url: '/api/users',
      method: 'GET',
      headers: {'X-Auth': token },
      success: (data) => {
        console.log("SUCCESS LOGIN");

      },
      error: (xhr, textStatus, err) => {
        console.log("Oops, something happened");
      }
    });
  },


  handleLogin(user) {
    $.ajax({
      url: '/api/sessions',
      method: 'POST',
      data: 'json',
      contentType: "application/json",
      data: JSON.stringify(user),
      success: (data) => {
        this.getUser(data);
      },
      error: (xhr, textStatus, err) => {
        console.log("Oops, something happened");
      }
    });
  },

  render: function() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm loginUser={this.handleLogin}/>
      </div>
    );
  }
});

module.exports = Login;
