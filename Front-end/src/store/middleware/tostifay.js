const toast =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type === 'ADD_TOAST') {
      console.log('Tosatify', action.payload.message);
    } else next(action);
  };
