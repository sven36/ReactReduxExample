import path from 'path';
import React, { Component, PropTypes } from 'react';
import Top from '../assets/src/js/home/components/Top.js';
import Header from '../assets/src/js/home/components/Header.js';
import Category from '../assets/src/js/home/components/Category.js';
import GameData from '../assets/src/js/home/components/GameData.js';
import Default from './layout/Default';

import { Provider } from 'react-redux';
import configureStore from '../assets/src/js/redux/configureStore';
const store = configureStore;
class Home extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object,
  };
  render() {
    const { microdata, mydata } = this.props;
    let homeJs = `${microdata.styleDomain}build/${microdata.styleVersion}/home.js`;
    let scriptUrls = [homeJs];

    return (
      <Default microdata={microdata} scriptUrls={scriptUrls} title={"侠客风云传前传"}>
        <div id="homePage">
          <Provider store={store}>
            <div className={"container"}>
              <Header />
              <Category />
              <GameData />
            </div>
          </Provider>
        </div>
      </Default >
    );
  }
};

module.exports = Home;
