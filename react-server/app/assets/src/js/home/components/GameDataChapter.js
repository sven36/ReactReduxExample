import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {filterAction} from './GameDataChapterRedux';
import UL from '../../common/UL.js';
import GameDataCharacter from './GameDataCharacter.js';

class GameDataChapter extends Component {

  render() {

    return (
      <div className="data-chapter">
          <UL id={"chapter_list"} action={this.props.actions} filter={this.props.filter} content={["夜阑卧听风吹雨","铁马冰河入梦来","梦里不知身是客","一晌贪欢"]} />
          <div className="chapter-list">
          <GameDataCharacter />
          </div>
      </div>
    );
  }
}

export default connect(state=>({
 filter:state.ChapterListFilter
}), dispatch=>({
   actions:bindActionCreators(filterAction,dispatch)
 }))(GameDataChapter);
