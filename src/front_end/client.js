import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory} from 'react-router';
import Application from "./components/Application";
import Register from "./components/Register";
import Login from "./components/Login";

// const app = document.getElementById('app');
// ReactDOM.render(<Application/>, app);



ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Application}>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={register}/>
    </Route>
  </Router>
), document.getElementById('app'));