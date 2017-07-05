import React, { Component, PropTypes } from 'react';

class CharacterInfo extends Component {
    static propTypes = {
        microdata: PropTypes.object,
        mydata: PropTypes.object,
    };

    render() {
        let content = this.props.content;
        let childs="";
        content.map(function (item){
            childs+="<div class=\"character-info-con\">";
            childs+="<h3>"+item.split('|')[0]+"</h3>";
            childs+="<p>"+item.split('|')[1]+"</p>";
            childs+="<a>查看更多+</a>";
            childs+="<img src=\""+item.split('|')[2]+"\"/>";
            childs+="</div>";
        });
        return (
            <div className="character-info" dangerouslySetInnerHTML={{__html:childs}}>
            </div>
        );
    }
}

export default CharacterInfo;
