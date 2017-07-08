import React, { Component } from 'react';
import LI from './LI.js';
const UL=(props)=>{
       let {id,content,filter,action,style}=props;
        let li=[];
        let key=0;
        if(Array.isArray(content)){
            content.map(
                function(item){
                    li.push(<LI key={key++ +id+'$LI'} id={id+key} content={item} filter={filter}  action={action} />);
                }
            );
        }else{
            li.push(<LI key={key++ +id+'$LI'} id={id+key} content={content} filter={filter}  action={action}  />);
        }
        return(
            <ul id={id} className={style}>
                {li}
            </ul>
        );
}
export default UL;