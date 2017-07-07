import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import UL from '../../common/UL.js';
import Category_Banner from './Category_Banner.js';
import Category_Slider from './Category_Slider.js';

let imgLists = ['/assets/src/images/SX.jpg', '/assets/src/images/SX2.jpg', 
'/assets/src/images/SX7.jpg','/assets/src/images/SX9.jpg'];
let length = imgLists.length;
// let categoryBackground=['background:rgb(238, 238, 238, .95);'];

class Category extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        };
        this.SliderChange = this.SliderChange.bind(this);
        this.SliderPause = this.SliderPause.bind(this);
        this.start = this.start.bind(this);
    }
    start() {
        this.imgSlider = setInterval(() => {
            this.SliderChange(1);
        }, 3000);
    }
    SliderChange(n) {
        var _n = this.state.index + n;
        if (_n < 0) {
            _n = _n + length;
        }
        if (_n >= length) {
            _n = _n - length;
        }
        this.setState({ index: _n });
    }
    SliderPause() {
        clearInterval(this.imgSlider);
    }
    componentDidMount() {
        this.start();
    }
    render() {
        return (
            <div id="category">
                <UL id={"category_list"} content={['对酒当歌', '人生几何', '譬如朝露', '去日苦多', '慨当以慷', '忧思难忘']} />
                <Category_Banner style={"banner"} imgList={imgLists} change={this.SliderChange} index={this.state.index} />
                <Category_Slider count={length} style={"slider"} pause={this.SliderPause} change={this.SliderChange} index={this.state.index} />
            </div>
        );
    }
}
export default Category;