import {createStore} from 'redux';
import rootReducer from './reducer';

const store = createStore(
     rootReducer,
     {count : 0},   // this is the initial state
     window.devToolsExtension ? window.devToolsExtension() : (f) => f // Needed to use the dev tools
);

export default store;
