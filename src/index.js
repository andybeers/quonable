import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './dux';

require('normalize.css');
require('./index.css');

let store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
