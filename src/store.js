import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_PRODUCT',
  payload: {
    description: 'My own product',
  },
});

console.log(store.getState());

export default store;
