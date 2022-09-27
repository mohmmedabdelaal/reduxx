import axios from 'axios';

const action = {
  type: 'apiRequestBegan',
  payload: {
    url: '/glitch',
    method: 'GET',
    data: {},
    onSuccess: 'requestSuccess',
    onError: 'requestFailed',
  },
};

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== 'apiRequestBegan') return next(action);
    next(action);

    const { url, method, data, onError, onSuccess } = action.payload;

    try {
      const response = await axios.request({
        baseURL: 'http://localhost:400045/api',
        url,
        method,
        data,
        onError,
        onSuccess,
      });
      dispatch({ type: 'requestSuccess', payload: response.data });
    } catch (error) {
      dispatch({ type: 'requestFailed', payload: error.message });
    }
  };

export default api;
