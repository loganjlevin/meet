import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    number: 32,
  };
  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ number: value });
  };
  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="num-events"
          value={this.state.number}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
