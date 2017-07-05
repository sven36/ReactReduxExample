import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import rootReducer from '../home/components/HomeRedux.js'

export default createStore(rootReducer);

