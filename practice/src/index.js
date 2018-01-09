import React from 'react';
import ReactDOM from 'react-dom';
import Test from './containers/test.js';
import Baidu from './containers/baidu/'

const components = [
	<Baidu/>,
	<Test/>
]
ReactDOM.render(
	components
	 ,
    document.querySelector('#root')
)

