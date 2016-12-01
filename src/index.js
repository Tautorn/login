import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// -- Pages
import Login from './js/pages/login';
import Dashboard from './js/pages/dashboard';
import Forgot from './js/pages/forgot';

// -- Third Party 
import 'bootstrap/dist/css/bootstrap.css';

// -- App CSS
import '../public/css/main.css';

// -- Routes
ReactDOM.render((
  <Router history={browserHistory}> 
    <Route path="/" component={Login}></Route>
    <Route path="/dashboard" component={Dashboard}></Route>
    <Route path="/forgot" component={Forgot}></Route>
  </Router>
), document.getElementById('root'));
