import React, { Component } from 'react';
const Header =(props)=> {
        return(
            <div id="header" className={props.style}>
                <img src="/assets/src/images/logo.png" />
            </div>
        );
}
export default Header;