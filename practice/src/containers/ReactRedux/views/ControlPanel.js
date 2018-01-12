import React, { Component } from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {

    ///////////debug
    console.warn(`【 ControlPanel 】> render`);

    return (
      <div style={style}>
        <Counter caption="First"/>
        <Counter caption="Second" />
        <hr/>
        <Summary />
      </div>
    );
  }
}

export default ControlPanel;

