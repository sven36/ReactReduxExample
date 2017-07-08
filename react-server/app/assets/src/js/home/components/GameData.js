import React, { Component } from 'react';
import GameDataChapter from './GameDataChapter.js';

const GameData =()=>  {
    return (
      <div className="gameData">
          <div className="data-title">游戏资料<font>DATA</font> </div>
          <GameDataChapter />
      </div>
    );
}
export default GameData;
