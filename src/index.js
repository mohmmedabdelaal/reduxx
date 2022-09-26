import configureStore from './store/configureStore';
// import * as actions from './store/reducer';
import reducer, { projectAdded } from './store/projects';

const store = configureStore();

store.subscribe(() => {
  console.log('store created');
});

store.dispatch(projectAdded({ name: 'project 1' }));
// store.dispatch(actions.addProduct({ description: 'TV' }));
// store.dispatch(actions.addProduct({ description: 'PS5' }));
// store.dispatch(actions.addProduct({ description: 'PS4' }));
// store.dispatch(actions.addProduct({ description: 'Wifi' }));
// store.dispatch(actions.removeProduct({ id: 1 }));

console.log(store.getState());
