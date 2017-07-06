import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import rootReducer from '../home/HomeRedux.js'

export default createStore(rootReducer);

