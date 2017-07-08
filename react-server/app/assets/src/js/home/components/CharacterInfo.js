import React, { Component } from 'react';
const CharacterInfo =(props)=>  {
        let {content,index,count} = props;
        content=content.split('|');
        let active=index.charAt(index.length-1)==count ? 'active':'';
        return (
            <div className={"character-info-con "+active}>
                <h3>{content[0]}</h3>
                <p>{content[1]}</p>
                <a>查看更多+</a>
                <img src={content[2]} />
            </div>
        );
}
export default CharacterInfo;
