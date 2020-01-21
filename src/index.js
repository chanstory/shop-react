import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App.js';

import { createStore } from 'redux';
import reducers from './reducers';

import * as actions from './actions';

import { Provider } from 'react-redux';

const store = createStore(reducers);

ReactDom.render(
  <Provider store={store }>
    <App/>
  </Provider>,
  document.getElementById('root')
);
