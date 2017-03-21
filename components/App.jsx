import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log('constructor props', props);
  }

  render() {
    const a = 10;
    return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hello World{a}</h1>
    </div>);
  }
}
