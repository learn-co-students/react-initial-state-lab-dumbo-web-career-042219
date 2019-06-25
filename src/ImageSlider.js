import React, { Component } from 'react';

class Slider extends Component {
  constructor() {
    super()

    this.state = {
      currentSlideIndex: 0
    }

    }
    render() {
      return (
        <h2>I am on slide {this.state.currentSlideIndex}</h2>
      )
  }
}

export default Slider
