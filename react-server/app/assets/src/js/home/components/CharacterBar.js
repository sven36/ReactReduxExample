import React, { Component } from 'react';
import UL from '../../common/UL.js';

const CharacterBar =(props)=>  {
        let {content,action,index} = props;
        return (
            <UL key={"character-bar#UL"} id={"characterList"} filter={index} action={action} content={content}  style={"character-bar"} />
        );
}
export default CharacterBar;
