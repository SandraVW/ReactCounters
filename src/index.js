import React from 'react';
import { render } from 'react-dom';
import styles from './app.css';
import {Provider} from 'react-redux' ;
import store from './store';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import directInput from './pages/directInput';
import gridDefinition from './pages/gridDefinition';
import extensionIntro from './pages/extensionIntro';
import extensionDep from './pages/extDependencies';
import extensionOverView from './pages/extOverview';
import mainPage from './Main';
import gridPlanning from './pages/gridPlanning';
import gridReact from './pages/gridReact';

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
        <Route path="/main.jsx" component={mainPage}></Route>
        <Route path="/pages/directInput" component={directInput}></Route>
        <Route path="/pages/gridDefinition" component={gridDefinition}></Route>
        <Route path="/pages/extensionIntro" component={extensionIntro}></Route>
        <Route path="/pages/extDependencies" component={extensionDep}></Route>
        <Route path="/pages/extOverview" component={extensionOverView}></Route>
        <Route path="./pages/gridPlanning" component={gridPlanning}></Route>
        <Route path="./pages/gridReact" component={gridReact}></Route>
      </Route>

  </Router>
</Provider>

render(provider, document.getElementById('root'));
