import React, { Component, PropTypes } from 'react';

class GameDataCharacter extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object,
  };

  render() {

    return (
      <div className="data-character">
      </div>
    );
  }
}

export default GameDataCharacter;
