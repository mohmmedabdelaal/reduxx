import { createSlice } from '@reduxjs/toolkit';

let newId = 0;

const slice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    addProject: (state, action) => {
      state.push({ id: ++newId, name: action.payload.name });
    },
  },
});

const { addProject } = slice.actions;
export default slice.reducer;
