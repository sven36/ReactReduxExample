import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import gameDataReducer from '../home/homeRedux/GameDataChapterRedux.js'
import categoryReducer from '../home/homeRedux/CategoryRedux.js'
export default createStore(combineReducers({gameDataReducer,categoryReducer}));

