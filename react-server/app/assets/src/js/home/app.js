import { render } from 'react-dom';
import React, { Component } from 'react';
import Top from './components/Top.js';
import Header from './components/Header.js';
import Category from './components/Category.js';
import GameData from './components/GameData.js';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from '../redux/configureStore.js';
const initialState=JSON.parse(document.getElementById('initial_data').getAttribute('data-state'));
const store =createStore(configureStore,initialState);
const appEle = document.getElementById('homePage');

render(<Provider store={store}>
    <div className={"container"}>
        <Header />
        <Category />
        <GameData />
    </div>
</Provider>, appEle);

