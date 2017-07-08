import React, { Component } from 'react';
import CharacterInfo from './CharacterInfo.js';
import CharacterBar from './CharacterBar.js';
const GameDataCharacter = (props) => {
  let { action, index,filter } = props;
  let style = filter.indexOf('1') > 0 ? "active" : "";
  const contentInfo = ["傅剑寒|无师自通的剑术奇才，无意中得到一本兵书从其中兵法创出一套剑法，名为杂烩剑法，为人豪迈，讲义气，爱好喝酒。|/assets/src/images/character_2.png",
    "谷月轩|“辽东大侠”谷云飞之子，逍遥谷第四代大弟子，为人端方斯文，一身正气！因内功精纯，无瑕子多传其拳法功夫！|/assets/src/images/character_3.png",
    "荆棘|逍遥谷第四代二弟子，个性倨傲，容易冲动!典型的刀子嘴豆腐心！双手分使刀剑，潜力惊人！|/assets/src/images/character_4.png",
    "萧复|在“法外十日”血案中，弦剑山庄唯一的幸存者，之后一心想要揪出幕后凶手，然后复仇！|/assets/src/images/character_5.png",
    "水盼盼|峨嵋派弟子，为了寻找丢失的本派武功至宝下山。之前从未与男性打过交道，所以与众人闹出了许多笑话。|/assets/src/images/character_6.png"];
  return (
    <div className={"data-character " + style}>
      <CharacterBar content={['', '', '', '', '']} action={action} index={index} />
      <div className="character-info" >
        <CharacterInfo content={contentInfo[0]} count={"1"} index={index} />
        <CharacterInfo content={contentInfo[1]} count={"2"} index={index} />
        <CharacterInfo content={contentInfo[2]} count={"3"} index={index} />
        <CharacterInfo content={contentInfo[3]} count={"4"} index={index} />
        <CharacterInfo content={contentInfo[4]} count={"5"} index={index} />
      </div>
    </div>
  );
}
export default GameDataCharacter;
