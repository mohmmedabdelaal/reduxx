import { createSlice } from '@reduxjs/toolkit';

let curId = 0;

const glitchSlice = createSlice({
  name: 'glitch',
  initialState: [],
  reducers: {
    addGlitch: (state, action) => {
      state.push({
        id: curId++,
        description: action.payload.id,
        resolved: false,
      });
    },
    removeGlitch: (state, action) => {
      state.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const { addGlitch, removeGlitch } = glitchSlice.actions;

export default glitchSlice.reducer;
