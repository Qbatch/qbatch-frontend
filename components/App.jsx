import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log('constructor props', props);
  }

  render() {
    const a = 10;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1>Hello World</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="text-center">
              Column 1
            </div>
          </div>
          <div className="col-6">
            <div className="text-center">
              Column 2
            </div>
          </div>
        </div>
      </div>);
  }
}
