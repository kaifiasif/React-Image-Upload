import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import './alertStyle.css';

export class AlertSuccess extends Component {
	constructor(props) {
		super(props);
		this.state = {
			alertFlag: false
		};
	}
	render() {
		return (
			<div>
				<Alert className="AlertSuccess2 alertstyle alertStyling" show={this.props.show} color="white">
					<img id="imgSuccess" src="../../img/success.gif" aria-hidden="true" alt="" />
					<p className="alertSuccessText">{this.props.message}</p>
				</Alert>
			</div>
		);
	}
}

export default AlertSuccess;
