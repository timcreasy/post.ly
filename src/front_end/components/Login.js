import React from "react";
import LoginForm from "./Login/LoginForm";
import emitter from "../../events/AppEvents";
import {browserHistory} from "react-router";

let Login = React.createClass({

  getInitialState() {
    return ({ currentUser: "" });
  },

  getUser(token) {
    $.ajax({
      url: '/api/users',
      method: 'GET',
      headers: {'X-Auth': token },
      success: (data) => {
        emitter.emit('loginEvent', this.state.currentUser);
        browserHistory.push('/posts');
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
        this.setState({ currentUser: user.username });
        $.ajaxSetup({
            headers: { 'x-auth': data }
        });
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
