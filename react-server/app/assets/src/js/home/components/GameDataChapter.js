import React, { Component, PropTypes } from 'react';
import UL from '../../common/UL.js';

class GameDataChapter extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object,
  };

  render() {

    return (
      <div className="data-chapter">
          <UL content={["夜阑卧听风吹雨","铁马冰河入梦来","梦里不知身是客","一晌贪欢"]} />
      </div>
    );
  }
}

export default GameDataChapter;
