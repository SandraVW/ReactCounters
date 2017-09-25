import React from 'react';
import { render } from 'react-dom';
import styles from './app.css';
import {Provider} from 'react-redux' ;
import store from './store';

import Main from './Main'

// wrap the content in a provider.
//This will make sure that the component are able to access the application state
const provider = <Provider store={store}><Main /></Provider>

render(provider, document.getElementById('root'));
