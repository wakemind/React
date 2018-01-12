import React from 'react';
import ReactDOM from 'react-dom';
import Test from './containers/test.js';
import Baidu from './containers/Baidu/';
import Comment from './containers/Comment/';
import ReduxWithContext from './containers/ReduxWithContext/';
import ReactRedux,{bb} from './containers/ReactRedux/';

const components = [
	<ReactRedux key="5"/>,
	<ReduxWithContext key="4"/>,
	// <Comment key="3"/>,
	<Baidu key="2"/>,
	<Test key="1">
		<div>Test component!!</div>
	</Test>
];


ReactDOM.render(
	components
	 ,
    document.querySelector('#root')
)


