import React from "react";
import { Link } from "react-router";
import PostContainer from "./PostContainer";
import Login from "./Login";
import Register from "./Register";
import { IndexLink } from 'react-router';
import emitter from "../../events/AppEvents";

let Application = React.createClass({

  componentDidMount() {
    emitter.addListener('loginEvent', (username) => {
      this.setState({ loggedInUserName: "Signed in as " + username, currentUser: username });
    });
  },


  getInitialState() {
    return ({ loggedInUserName: "", currentUser: "" });
  },

  render: function() {

    return (
      <div className='container'>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className='nav navbar-nav' role='nav'>
              <li><IndexLink to="/" activeClassName="active">Posts</IndexLink></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
            <p className="navbar-text navbar-right">{this.state.loggedInUserName}</p>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Application;
