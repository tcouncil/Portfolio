import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/'> 
     
        <App />

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);