import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default class AppLayout extends React.Component {

  constructor(props) {
    super(props);
    // console.log('constructor props', props);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Footer />
      </div>
    );
  }
}
