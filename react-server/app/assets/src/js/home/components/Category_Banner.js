import React, { Component } from 'react';
import Img from '../../common/Img.js';
const Category_Banner=(props)=>{
       let {id,style,imgList,index} = props;
        let imgs = [];
        let key = 0;
        if (Array.isArray(imgList)) {
            for (key; key < imgList.length; key++) {
                imgs.push(<Img key={key + 'Category_Banner'} src={imgList[key]} style={key == index ? '' : 'display'} />);
            }
        } else {
            imgs.push(<Img key={key++ + 'Category_Banner'} src={imgList} style={''} />);
        }
        return (
            <div id={id} className={style}>
                {imgs}
            </div>
        );
}
export default Category_Banner;