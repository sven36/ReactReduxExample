import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

const Top =(props)=> {
        return(
            <div className={props.style}>
                <h1><Link to="#" className="red">请登录</Link></h1>
                <ul className={props.style2}>
                    <li><Link to="#">使用帮助</Link></li>
                    <li>|</li>
                    <li>网上客服</li>
                    <li>|</li>
                </ul>
            </div>
        );
}
export default Top;