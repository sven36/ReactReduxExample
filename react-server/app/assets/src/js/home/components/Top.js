import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Top extends Component{
    render(){
        return(
            <div className={this.props.style}>
                <h1><Link to="192.168.0.79:8630" className="red">请登录</Link></h1>
                <ul className={this.props.style2}>
                    <li><Link to="https://es.fesco.com.cn/Esvr/Home/MasterPage?source=%2fEsvr%2fOnlineAppointment%2fLeaveWordForm">使用帮助</Link></li>
                    <li>|</li>
                    <li>网上客服</li>
                    <li>|</li>
                </ul>
            </div>
        );
    }
}
export default Top;