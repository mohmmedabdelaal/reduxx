import { createSlice } from '@reduxjs/toolkit';

let newId = 0;

const slice = createSlice({
  name: 'project',
  initialState: [],
  reducers: {
    projectAdded: (state, action) => {
      state.push({ id: ++newId, name: action.payload.name });
    },
  },
});

export const { projectAdded } = slice.actions;

export default slice.reducer;
