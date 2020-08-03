import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
		this.ticker = props.timer;
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), this.ticker);
	}

	tick() {
		this.setState({
			counter: this.state.counter + 1
		});
	}

	render() {
		return (
			<div className=" text-center  m-1 mt-2 rounded glow">
				<h2 className="bg-dark p-3 pt-4 rounded text-white ">
					{this.state.counter % 10}
				</h2>
			</div>
		);
	}
}

Counter.propTypes = {
	timer: PropTypes.number
};
