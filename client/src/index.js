import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import Routes from './routes';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import allReducers from './reducers';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
