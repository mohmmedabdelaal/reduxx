import configureStore from './store/configureAppStore';
import { apiCallBegan, apiCallFailed, apiCallReceived } from './store/api';
import { loadGlitch } from './store/glitches';

const store = configureStore();

store.subscribe(() => {
  console.log('start subscribe');
});

store.dispatch(loadGlitch());
