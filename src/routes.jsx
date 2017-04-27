import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import AppLayout from './components/AppLayout.jsx';
import Registration from './components/Registration.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

const Routes = () => (
  <Router>
    <div>
      <AppLayout exact path="/" component={Home} />
      <AppLayout path="/home" component={Home} />
      <AppLayout path="/about" component={About} />
      <AppLayout path="/register" component={Registration} />
    </div>
  </Router>
);

export default Routes;
