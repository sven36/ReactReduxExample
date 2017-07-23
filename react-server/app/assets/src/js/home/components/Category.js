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
        this.throttle = this.throttle.bind(this);
        this.hoverThrottle = this.hoverThrottle.bind(this);
    }
    start() {
        this.intervalId = setInterval(() => {
            this.props.changeAction();
        }, 3000);
    }
    hover(e) {
        this.throttle(this.hoverThrottle, e);
    }
    hoverThrottle(id) {
        if (id) {
            clearInterval(this.intervalId);
            this.props.hoveraction(id);
        }
    }
    //添加一个函数节流防止hover事件过多触发;
    throttle(methord, context) {
        clearTimeout(methord.tId);
        //React有自己的事件处理机制合成事件(SyntheticEvent)，event调用后被销毁;
        //异步使用event应使用event.persist(),这里我们传参数即可；
        let id = 0;
        if (context.target && context.target.id) {
            id = context.target.id.charAt(0);
        }
        methord.tId = setTimeout(function () {
            methord.call(this, id);
        }, 500);
    }
    mouseOut() {
        clearInterval(this.intervalId);
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