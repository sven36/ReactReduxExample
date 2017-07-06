import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import LI from './LI.js';
class UL extends Component{
    render(){
        let {content,filter,action}=this.props;
        let li=[];
        let key=0;
        if(Array.isArray(content)){
            content.map(
                function(item){
                    li.push(<LI key={key++ +'$LI'} id={key++ +'$LI'} content={item} filter={filter}  action={action} />);
                }
            );
        }else{
            li.push(<LI key={key++ +'$LI'} id={key++ +'$LI'} content={content} filter={filter}  action={action}  />);
        }
        return(
            <ul  id={this.props.id} className={this.props.style}>
                {li}
            </ul>
        );
    }
}
export default UL;