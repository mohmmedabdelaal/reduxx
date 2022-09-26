import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
let curId = 0;

const slice = createSlice({
  name: 'Glitch',
  initialState,
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

console.log(slice);

export const { addProduct, removeProduct } = slice.actions;

export default slice.reducer;
