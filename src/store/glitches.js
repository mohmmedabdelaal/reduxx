import { createSlice } from '@reduxjs/toolkit';

let newId = 0;

const slice = createSlice({
  name: 'glitches',
  initialState: [],
  reducers: {
    addGlitch: (state, action) => {
      state.push({ id: ++newId, desc: action.payload.desc });
    },
    removeGlitch: (state, action) => {
      state.filter((g) => g.id !== action.payload.id);
    },
  },
});

export const { addGlitch, removeGlitch } = slice.actions;

export default slice.reducer;
