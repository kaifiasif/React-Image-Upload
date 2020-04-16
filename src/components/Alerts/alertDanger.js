import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import './alertStyle.css';
import { isEqual } from 'lodash';

export class AlertDanger extends Component {
	constructor(props) {
		super(props);
		this.state = {
			alertFlag: true
		};
	}

	componentDidUpdate(prevProps) {
		if ((this.props.id || prevProps.id) && !isEqual(prevProps.id, this.props.id)) {
			this.setState({ alertFlag: true });

			!!this.props.autoClose &&
				setTimeout(() => {
					this.setState({ alertFlag: false });
					this.props.closedAlert && this.props.closedAlert();
				}, 2000);
		}
	}

	componentDidMount() {
		//this.props.fetchEarlyWarningTableData()
		!!this.props.autoClose &&
			setTimeout(() => {
				this.setState({ alertFlag: false });
				this.props.closedAlert && this.props.closedAlert();
			}, 2000);
	}

	render() {
		let alertFlag = this.state.alertFlag;
		return alertFlag ? (
			<div>
				<Alert className="alertStyling alertstyleDanger" show={this.props.show} color="white">
					<img id="imgDanger" src="../../img/alertDanger.gif" aria-hidden="true"  alt="#"/>
					<p className="dangerText">{this.props.message}</p>
				</Alert>
			</div>
		) : null;
	}
}

export default AlertDanger;
