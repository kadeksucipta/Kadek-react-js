import React, { Component } from "react";

export default class Loader extends Component {
	render() {
		return (
			<div className="d-flex justify-content-center align-items-start">
				<div className="custom-loader"></div>
			</div>
		);
	}
}
