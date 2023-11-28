// src/store/index.js

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

// Enable Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(/* your middleware here if any */))
);

export default store;
