import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class LI extends Component{
    render(){
        return(
            <li className={this.props.style}>
                {this.props.content}
            </li>
        );
    }
}
export default LI;