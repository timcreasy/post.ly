import React from "react";
import { Link } from "react-router";
import PostContainer from "./PostContainer";
import Login from "./Login";
import Register from "./Register";
import { IndexLink } from 'react-router';
import emitter from "../../events/AppEvents";

let Application = React.createClass({



  render: function() {
    emitter.addListener('loginEvent', (username) => {
      console.log("SHIT SOMEONE LOGGED IN:", username);
    });

    return (
      <div className='container'>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className='nav navbar-nav' role='nav'>
              <li><IndexLink to="/" activeClassName="active">Posts</IndexLink></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Application;
