import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class LI extends Component{
    render(){
        let{event,action,id,filter,style}=this.props;
        if(this.props.action){
            event=this.props.action.filterAction;
        }
        if(filter){
            style=filter==id? 'active':'';
        }
        return(
            <li id={id} className={style} onClick={event ? event(id):''}>
                {this.props.content}
            </li>
        );
    }
}
export default LI;