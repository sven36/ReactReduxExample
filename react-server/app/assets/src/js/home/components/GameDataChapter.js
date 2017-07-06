import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {filterAction} from './GameDataChapterRedux';
import UL from '../../common/UL.js';
import GameDataCharacter from './GameDataCharacter.js';

class GameDataChapter extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object,
  };

  render() {

    return (
      <div className="data-chapter">
          <UL action={this.props.actions} filter={this.props.filter} content={["夜阑卧听风吹雨铁马冰河入梦来","梦里不知身是客一晌贪欢"]} />
          <div className="chapter-list">
          <GameDataCharacter />
          </div>
      </div>
    );
  }
}
// function select(state){
// return{
//  filter:state.ChapterListFilter
// }
// }
export default connect(state=>({
 filter:state.ChapterListFilter
}), dispatch=>({
   actions:bindActionCreators(filterAction,dispatch)
 }))(GameDataChapter);
