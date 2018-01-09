import React from 'react';
import ReactDOM from 'react-dom';
import Test from './containers/test.js';
import Baidu from './containers/Baidu/';
import Comment from './containers/Comment/';


const components = [
	<Comment/>,
	<Baidu/>,
	<Test/>
];


ReactDOM.render(
	components
	 ,
    document.querySelector('#root')
)
