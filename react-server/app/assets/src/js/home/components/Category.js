import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import UL from '../../common/UL.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Category_Banner from './Category_Banner.js';
import Category_Slider from './Category_Slider.js';
import { SlideChange, SlideClick, SlideHover, SlideMouseOut } from '../homeRedux/CategoryRedux';

let imgLists = ['/assets/src/images/SX.jpg', '/assets/src/images/SX2.jpg',
    '/assets/src/images/SX7.jpg', '/assets/src/images/SX9.jpg'];
let length = imgLists.length;
// let categoryBackground=['background:rgb(238, 238, 238, .95);'];

class Category extends Component {
    constructor() {
        super();
        this.start = this.start.bind(this);
        this.hover = this.hover.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
    }
    start() {
        this.intervalId = setInterval(() => {
            this.props.changeAction();
        }, 3000);
    }
    hover(e) {
        clearInterval(this.intervalId);
        let id = 0;
        if (e.target && e.target.id) {
            id = e.target.id.charAt(0);
            this.props.hoveraction(id);
        }
    }
    mouseOut() {
        this.intervalId = setInterval(() => {
            this.props.changeAction();
        }, 3000);
    }
    componentDidMount() {
        this.start();
    }
    render() {
        const { index, hoveraction } = this.props;
        return (
            <div id="category">
                <UL id={"category_list"} content={['对酒当歌', '人生几何', '譬如朝露', '去日苦多', '慨当以慷', '忧思难忘']} />
                <Category_Banner style={"banner"} imgList={imgLists} hover={this.hover} index={index} mouseOut={this.mouseOut} />
                <Category_Slider count={length} style={"slider"} hover={this.hover} index={index} />
            </div>
        );
    }
}
export default connect(state => ({
    index: state.categoryReducer.BannerIndex,
}), dispatch => ({
    changeAction: bindActionCreators(SlideChange, dispatch),
    hoveraction: bindActionCreators(SlideHover, dispatch)
}))(Category);
        // this.imgSlider = setInterval(() => {
        //     this.SliderChange(1);
        // }, 3000);
    //         SliderChange(n) {
    //     var _n = this.state.index + n;
    //     if (_n < 0) {
    //         _n = _n + length;
    //     }
    //     if (_n >= length) {
    //         _n = _n - length;
    //     }
    //     this.setState({ index: _n });
    // }