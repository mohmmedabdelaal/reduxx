import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';
import axios from 'axios';
import moment from 'moment';

const slice = createSlice({
  name: 'glitches',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    glitchRequested: (state, action) => {
      state.loading = true;
    },

    glitchReceived: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
    },

    glitchesRequestedFailed: (state, action) => {
      state.loading = false;
    },

    glitchAdded: (state, action) => {
      state.list.push(action.payload);
    },

    addGlitch: (state, action) => {
      state.list.push({ id: ++newId, desc: action.payload.desc });
    },
    glitchAssignToUser: (state, action) => {
      const { id: glitchId, userId } = action.payload;
      const index = state.list.findIndex((gli) => gli.id === glitchId);
      state.list[index].userId = userId;
    },
    removeGlitch: (state, action) => {
      state.list.filter((g) => g.id !== action.payload.id);
    },
    glitchResolved: (state, action) => {
      const index = state.list.findIndex((gli) => gli.id === action.payload.id);
      state.list[index].resolved = true;
    },
  },
});

export const {
  glitchAdded,
  addGlitch,
  removeGlitch,
  glitchAssignToUser,
  glitchResolved,
  glitchRequested,
  glitchesRequestedFailed,
} = slice.actions;

export default slice.reducer;

//// Action creators

const url = '/glitch';

export const loadGlitch = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.glitches;

  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
  if (diffInMinutes < 10) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: glitchRequested.type,
      onSuccess: glitchReceived.type,
      onError: glitchesRequestedFailed.type,
    })
  );
};

export const addBug = (glitch) =>
  apiCallBegan({
    url,
    method: 'post',
    data: glitch,
    onSuccess: glitchAdded.type,
  });

export const resolvedGlitch = (id) =>
  apiCallBegan({
    url: `${url}/${id}`,
    method: 'patch',
    data: { resolved: true },
    onSuccess: glitchResolved.type,
  });

export const assignGlitchToUser = (glitchId, userId) =>
  apiCallBegan({
    url: `${url}/${glitchId}`,
    data: { userId },
    onSuccess: glitchAssignToUser.type,
  });
