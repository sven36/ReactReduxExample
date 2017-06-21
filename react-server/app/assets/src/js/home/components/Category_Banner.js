import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Img from '../../common/Img.js';

class Category_Banner extends Component {
    render() {
        let imgList = this.props.imgList;
        let index = this.props.index;
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
            <div id={this.props.id} className={this.props.style}>
                {imgs}
            </div>
        );
    }
}
export default Category_Banner;