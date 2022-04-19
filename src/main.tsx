import React from 'react';
import { render } from 'react-dom';
import 'regenerator-runtime/runtime';
import App from './router';
import './styles/default.less';

render(
  <App />,
  document.getElementById('root')
);
