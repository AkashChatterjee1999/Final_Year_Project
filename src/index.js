import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import dotenv from 'dotenv'
let result = dotenv.config('.env')
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);