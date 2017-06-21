import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';
import Top from './components/Top.js';
import Header from './components/Header.js';
import Category from './components/Category.js';

const appEle = document.getElementById('homePage');

render(<div className={"container"}>
    <Top style="nav-top" style2="fl_right" />
    <Header style="c" />
    <Category />
    </div>, appEle);

        // const microdata = JSON.parse(appEle.getAttribute('data-microdata'));
// let mydata = JSON.parse(appEle.getAttribute('data-mydata'));
// mydata.nick += ', then client reRender ';
