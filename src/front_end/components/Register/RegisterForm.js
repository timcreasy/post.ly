import React from 'react';


export default React.createClass({

  getInitialState() {
    return ({ username: "", password: ""});
  },

  registerClicked(e) {
    e.preventDefault();
    this.props.registerUser({username: this.state.username, password: this.state.password});
  },

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  },

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  },

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label>Username</label>
            <input className="form-control" type="text" onChange={this.handleUsernameChange}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" onChange={this.handlePasswordChange}/>
          </div>
          <input className="btn btn-success btn-lg btn-block" type="submit" value="Register" onClick={this.registerClicked}/>
        </form>
      </div>
    );
  }
});