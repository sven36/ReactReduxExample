import React, { Component} from 'react';
const Img=(props)=>{
    return <img id={props.id}  src={props.src} alt={props.alt} onMouseOver={props.onHover} onMouseOut={props.change} className={props.style}/>
}
export default Img;