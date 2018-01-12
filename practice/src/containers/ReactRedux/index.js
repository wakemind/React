import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import ControlPanel from './views/ControlPanel';
import store from './Store.js';

import './index.css';

  ////////////debug
  console.warn(`【 index 】`);


class ReactRedux extends React.Component {
  render () {
    return (
     <Provider store={store}>
     	<div>
        <h3>ReactRedux 示例</h3>
      	<ControlPanel />
      </div>
  	</Provider>
    )
  }
}

export default ReactRedux;

