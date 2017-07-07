import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import rootReducer from '../home/components/GameDataChapterRedux.js'

export default createStore(rootReducer);

