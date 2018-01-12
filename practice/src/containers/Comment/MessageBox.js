import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class MessageBox extends React.Component{

	constructor(...args){

		super(...args);
	}


	render(){

		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-8 col-sm-offset-2">
						<h4>留言板</h4>
						<div className="panel panel-default">
							<div className="panel-heading"></div>
							<div className="panel-body"></div>
							<div className="panel-footer"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MessageBox;

