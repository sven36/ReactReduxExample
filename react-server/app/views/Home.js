import path from 'path';
import React, { Component } from 'react';

import Top from '../assets/src/js/home/components/Top.js';
import Header from '../assets/src/js/home/components/Header.js';
import Category from '../assets/src/js/home/components/Category.js';
import GameData from '../assets/src/js/home/components/GameData.js';
import Default from './layout/Default';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from '../assets/src/js/redux/configureStore';
const store = createStore(configureStore);
const initalState=JSON.stringify(store.getState());
class Home extends Component {

  render() {

    return (
      <Default  title={"侠客风云传前传"}>
        <div id="homePage">
          <Provider store={store}>
            <div className={"container"}>
              <Header />
              <Category />
              <GameData />
            </div>
          </Provider>
        </div>
        <div id="initial_data" data-state={initalState}></div>
      </Default >
    );
  }
};

module.exports = Home;
