import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducers'

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
