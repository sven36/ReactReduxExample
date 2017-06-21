import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
class Header extends Component{
    render(){
        return(
            <div id="header" className={this.props.style}>
                <img src="/assets/src/images/logo.png" />
            </div>
        );
    }
}
export default Header;