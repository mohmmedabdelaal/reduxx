import { combineReducers } from '@reduxjs/toolkit';
import projectsReducer from './projects';
import glitchesReducer from './glitches';
import usersReducer from './users';

export default combineReducers({
  projects: projectsReducer,
  glitches: glitchesReducer,
  users: usersReducer,
});
