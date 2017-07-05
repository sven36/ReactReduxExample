import React, { Component, PropTypes } from 'react';
import GameDataChapter from './GameDataChapter.js';


class GameData extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object,
  };

  render() {

    return (
      <div className="gameData">
          <div className="data-title">游戏资料<font>DATA</font> </div>
          <GameDataChapter />
      </div>
    );
  }
}

export default GameData;
