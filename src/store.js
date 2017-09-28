import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';

import { routerReducer, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router';



const store = createStore(
  combineReducers({reactCounters: rootReducer, routing: routerReducer}),
  {},
  compose(applyMiddleware(routerMiddleware(browserHistory)),
     window.devToolsExtension ? window.devToolsExtension() : (f) => f) // Needed to use the dev tools
);

export default store;
