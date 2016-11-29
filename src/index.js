import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './js/pages/app';
import Dashboard from './js/pages/dashboard';
import Signout from './js/pages/signout';

import './index.css';

// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './css/components/modal.css';
import './css/components/button.css';
import './css/components/inner-addon.css';
import './css/components/form.css'; 

import './css/helper/shadow.css';
import './css/helper/skin.css';

// import $ from 'jquery';

// import './third-party/vendor/jquery.mockjax.js';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/dashboard" component={Dashboard}></Route>
    <Route path="/sign-out" component={Signout}></Route>
  </Router>
), document.getElementById('root'));
