import configureStore from './store/configureAppStore';
import { addGlitch } from './store/glitches';
import { addUsers } from './store/users';

const store = configureStore();

store.subscribe(() => {
  console.log('start subscribe');
});

store.dispatch({
  type: 'apiRequestBegan',
  payload: {
    url: '/glitch',

    onSuccess: 'requestSuccess',
    onError: 'requestFailed',
  },
});
