import React from 'react';
import { render } from 'react-dom';
import styles from './app.css';
import {Provider} from 'react-redux' ;
import store from './store';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import directInput from './pages/directInput';
import gridDefinition from './pages/gridDefinition';
import extensionIntro from './pages/extensionIntro';

import {
  syncHistoryWithStore
} from 'react-router-redux';

import Main from './Main'

const history = syncHistoryWithStore(browserHistory, store);

// wrap the content in a provider.
//This will make sure that the component are able to access the application state
const provider = <Provider store={store}>
  <Router history={history}>
      <Route path="/">
        <IndexRoute component={Main}></IndexRoute>
        <Route path="/pages/directInput" component={directInput}></Route>
        <Route path="/pages/gridDefinition" component={gridDefinition}></Route>
        <Route path="/pages/extensionIntro" component={extensionIntro}></Route>
      </Route>

  </Router>
</Provider>

render(provider, document.getElementById('root'));
