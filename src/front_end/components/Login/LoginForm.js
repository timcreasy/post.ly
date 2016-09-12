import React from "react";

 /*     <div class="container">
        <form ng-submit="login(username, password)">
          <div class="form-group">
            <label>Username</label>
            <input class="form-control" type="text" ng-model="username" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input class="form-control" type="password" ng-model="password" />
          </div>
          <input class="btn btn-success btn-lg btn-block" type="submit" value="Login" />
        </form>
      </div>

  */

export default React.createClass({
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label>Username</label>
            <input className="form-control" type="text"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" />
          </div>
          <input className="btn btn-success btn-lg btn-block" type="submit" value="Login" />
        </form>
      </div>
    );
  }
});