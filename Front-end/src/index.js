import configureStore from './store/configureAppStore';
import { apiCallBegan, apiCallFailed, apiCallReceived } from './store/api';

const store = configureStore();

store.subscribe(() => {
  console.log('start subscribe');
});

store.dispatch(
  apiCallBegan({
    url: '/glitch',
    onSuccess: apiCallReceived.type,
  })
);
