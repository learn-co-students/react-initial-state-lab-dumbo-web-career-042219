// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }



  render(){
    console.log(this.state); //
    const thisMessageWillSelfDestruct = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
      <div>
      {thisMessageWillSelfDestruct}
      </div>
    )


  }

}
