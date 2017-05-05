import React from 'react';
import ReactDOM from 'react-dom';
import AppProvider from './app-provider.component.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';


ReactDOM.render(
  <AppProvider />,
  document.getElementById('root')
);
