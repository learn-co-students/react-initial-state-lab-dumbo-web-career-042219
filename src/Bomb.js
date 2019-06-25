// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

	 constructor(props) {
    super(props)
    this.state = {
    	secondsLeft: this.props.initialCount
    }
  }

	countDown = () => {
	const newCountdown = this.state.secondsLeft - 1
	setTimeout(() => {
		this.setState({
			secondsLeft: newCountdown
		})
	},1000)
	// this.render()
}

	render() {
		if (this.state.secondsLeft > 0 ) {
			this.countDown()
			return (
			<div>
			{this.state.secondsLeft} seconds left before I go boom!
			</div>
			)} else {
				return (
					<div>
					Boom!
					</div>
				)

			}
		
	}








}