
import React from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './views/ControlPanel';
import store from './Store.js';
import Provider from './Provider.js';
import './index.css';


class ReduxWithContext extends React.Component {
  render () {
    return (
     <Provider store={store}>
     <div>
        <h3>ReduxWithContext 示例</h3>
        <button style={{display:'block'}}>afaf</button>
      	<ControlPanel />
      </div>
  	</Provider>
    )
  }
}

export default ReduxWithContext;
