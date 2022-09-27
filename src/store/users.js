import { createSlice } from '@reduxjs/toolkit';

let uId = 0;

const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUsers: (state, action) => {
      state.push({ id: ++uId, name: action.payload.name });
    },
  },
});

export const { addUsers } = slice.actions;

export default slice.reducer;
