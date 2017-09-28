import { INCREMENT, DECREASE } from './actions';

export default function rootReducer(state = {}, action){
  switch(action.type) {
    case INCREMENT: return increment(state, action);
    case DECREASE: return decrease(state, action);
    default: return state;
  }
}

function increment(state, action) {
  const idToUpdate = action.id;
  return Object.assign({}, state, {count: state.count + 1});
}

function decrease(state, action) {
    const idToUpdate = action.id;
  return Object.assign({}, state, {count: state.count - 1});
}
