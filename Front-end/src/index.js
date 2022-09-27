import configureStore from './store/configureAppStore';
import { addGlitch } from './store/glitches';
import { addUsers } from './store/users';

const store = configureStore();

store.subscribe(() => {
  console.log('start subscribe');
});

// store.dispatch((dispatch, getState) => {
//   dispatch({ type: 'addUsers', users: ['one', 'two'] });
//   console.log(getState);
// });

store.dispatch({ type: 'ADD_TOAST', payload: { message: 'An error happen' } });

// store.dispatch(addUsers({ name: 'Mohamed' }));

// store.dispatch(addGlitch({ desc: 'chrome not lunching' }));
