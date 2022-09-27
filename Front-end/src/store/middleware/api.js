import axios from 'axios';
import { apiCallBegan, apiCallFailed, apiCallReceived } from '../api';

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const response = await axios.request({
        baseURL: 'http://localhost:4000/api',
        url,
        data,
        method,
        onSuccess,
        onError,
      });
      //general
      dispatch(apiCallReceived(response.data));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch(apiCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
