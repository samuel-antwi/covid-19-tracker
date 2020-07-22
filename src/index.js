import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import APIContext from './context/APIContext';

ReactDOM.render(
  <React.StrictMode>
    <APIContext>
      <Router>
        <App />
      </Router>
    </APIContext>
  </React.StrictMode>,
  document.getElementById('root')
);
