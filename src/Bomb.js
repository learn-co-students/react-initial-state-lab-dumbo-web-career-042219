import React, { Component } from 'react';
// your Bomb code here!

export default class Bomb extends Component {


    state = {
        secondsLeft: this.props.initialCount
      }



      render() {

        return (
            <div>
            {console.log(this.state.secondsLeft)}
        {this.state.secondsLeft === 0
          ? 'Boom!'
          : `${this.state.secondsLeft} seconds left before I go boom!`}
          </div>
        )
      }


}