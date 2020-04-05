import 'react-app-polyfill/ie9';

import React from 'react';
import ReactDom from 'react-dom';


import App from './components/App.js';

ReactDom.render(
    <App/>,
  document.getElementById('root')
);
