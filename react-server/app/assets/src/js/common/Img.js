import React, { Component} from 'react';
const Img=(props)=>{
    return <img id={props.id}  src={props.src} alt={props.alt} onClick={props.click} onMouseOut={props.mouseOut} onMouseOver={props.hover} className={props.style}/>
}
export default Img;