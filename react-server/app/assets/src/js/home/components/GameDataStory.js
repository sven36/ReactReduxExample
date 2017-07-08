import React, { Component } from 'react';

const GameDataStory = (props) => {
    let { filter } = props;
    let style = filter.indexOf('2')>0 ? "active":"";
    return (
        <div className={"data-story "+style}>
            <p>武林时至乱世，中原既有少林，峨眉，武当等名门正派，亦有酆都这样的邪教异端。近年外族势力天龙教也对中原虎视眈眈。</p>
            <p>在大英雄小虾米神秘失踪后已经过去了100多年，江湖上又偶有势力相争，意图武林霸主之位。</p>
            <p>此时，朝廷突发《法外三旬》法令，官府将不再过问江湖仇杀。一时间，各门各派人人自危，屠杀灭门惨案更是举不胜举！</p>
            <p>谷月轩及荆棘奉师傅之命外出查探此事，意外结识神秘少女卫紫绫三人结伴为解开这一切的幕后黑手而闯荡江湖，渐渐的他们发现，这并不是简单的江湖仇杀，而在这一切的背后，似乎有一只大手，正在操纵这一切！</p>
        </div>
    );
}
export default GameDataStory;