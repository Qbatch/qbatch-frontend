import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import AppLayout from './components/AppLayout.jsx';
import Routes from './routes.jsx'
import './stylesheets/main.scss';

ReactDOM.render(<Routes />, document.getElementById('root'));
