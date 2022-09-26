import configureStore from './store/configureStore';
import { projectAdded } from './store/projects';
import { addGlitch } from './store/glitch';

const store = configureStore();

store.subscribe(() => {
  console.log('store created');
});

store.dispatch(projectAdded({ name: 'project 1' }));
store.dispatch(addGlitch({ description: 'TV' }));

console.log(store.getState());
