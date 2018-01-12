import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageBox from './MessageBox';

class Comment extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {
        	wordList :  [],
            index : -1,
            listShow : false
        }

    }


    render() {

    	return [
			<MessageBox key="box"/>
    	]
    }


}

export default Comment;


