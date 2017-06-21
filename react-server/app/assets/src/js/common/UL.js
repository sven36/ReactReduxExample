import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import LI from './LI.js';
class UL extends Component{
    render(){
        let contents=this.props.content;
        let li=[];
        let key=0;
        if(Array.isArray(contents)){
            contents.map(
                function(item){
                    li.push(<LI key={key++ +'$UL'} content={item} />);
                }
            );
        }else{
            li.push(<LI key={key++ +'$UL'} content={contents} />);
        }
        return(
            <ul  id={this.props.id} className={this.props.style}>
                {li}
            </ul>
        );
    }
}
export default UL;