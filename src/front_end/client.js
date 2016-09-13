import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Application from "./components/Application";
import Posts from "./components/PostContainer";
import Register from "./components/Register";
import Login from "./components/Login";

// const app = document.getElementById('app');
// ReactDOM.render(<Application/>, app);



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Application} >
      <IndexRoute component={Posts} />
      <Route path="/posts" component={Posts} />
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Route>
  </Router>
), document.getElementById('app'));