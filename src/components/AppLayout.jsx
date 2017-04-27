import React from 'react';

import Header  from './Header.jsx';
import Footer  from './Footer.jsx';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


const AppLayout = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <div className="app">
      <Header />
      <Component {...props}/>
      <hr/>
      <Footer />
    </div>
  )}/>
)

export default AppLayout;
