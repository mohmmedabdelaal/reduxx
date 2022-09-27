import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';
import toast from './middleware/tostifay';

export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ auth: 'user authentication' }),
      toast,
    ],
  });
}
