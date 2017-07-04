import React, { Component, PropTypes } from 'react';
import GameDataChapter from './GameDataChapter.js';
import GameDataCharacter from './GameDataCharacter.js';


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
          <GameDataCharacter />
      </div>
    );
  }
}

export default GameData;
