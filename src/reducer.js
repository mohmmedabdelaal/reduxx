import { combineReducers } from '@reduxjs/toolkit';

const initial = [];
let curId = 0;

function reducer(state = initial, action) {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      return [
        ...state,
        {
          id: curId++,
          description: action.payload.description,
          resolved: false,
        },
      ];
    }
    case 'REMOVE_PRODUCT': {
      return state.filter((p) => p.id !== action.payload.id);
    }
    default:
      return state;
  }
}

export default reducer;
