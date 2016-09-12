import React from "react";
import { Link } from "react-router";
import PostContainer from "./PostContainer";
import Login from "./Login";
import Register from "./Register";

let Application = React.createClass({
  render: function() {
    return (
      <div className='container'>
        <ul className='nav navbar-nav' role='nav'>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Application;
