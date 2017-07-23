import { render } from 'react-dom';
import React, { Component } from 'react';
import Top from './components/Top.js';
import Header from './components/Header.js';
import Category from './components/Category.js';
import GameData from './components/GameData.js';

import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore.js';
const store = configureStore;
const appEle = document.getElementById('homePage');

render(<Provider store={store}>
    <div className={"container"}>
        <Header />
        <Category />
        <GameData />
    </div>
</Provider>, appEle);

