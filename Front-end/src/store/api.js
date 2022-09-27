import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan = createAction('api/callBegan');
export const apiCallReceived = createAction('api/callReceived');
export const apiCallFailed = createAction('api/callFailed');
