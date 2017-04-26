import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import Registration from './Registration.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log('constructor props', props);
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/register">Register</Link> </li>
            <li> <Link to="/about">About</Link> </li>
          </ul>
          <Route path="/register" component={Registration}/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>);
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

