import { combineReducers } from 'redux';
import authReducer from './AuthReducers.js';

export const reducers = combineReducers({ authReducer });