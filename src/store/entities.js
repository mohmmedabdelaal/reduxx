import { combineReducers } from '@reduxjs/toolkit';
import glitchReducer from './glitch';
import projectsReducer from './projects';

export default combineReducers({
  glitch: glitchReducer,
  projects: projectsReducer,
});
