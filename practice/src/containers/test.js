import React from 'react';

class Test extends React.Component {

    constructor(...args) {

        super(...args);

    }


    render() {

    	return (
    	  <div>
			{this.props.children}
	      </div>
    	)
    }


}

export default Test;


