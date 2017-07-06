import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class LI extends Component{
    render(){
        let event;
        if(this.props.action){
            event=this.props.action.filterAction;
        }
        let id=this.props.id;
        let filter=this.props.filter ?this.props.filter:"";
        return(
            <li id={id} className={this.props.style+' '+filter==id ?'active':''} onClick={event ? event(this.props.id):''}>
                {this.props.content}
            </li>
        );
    }
}
export default LI;