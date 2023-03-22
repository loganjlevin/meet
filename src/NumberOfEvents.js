import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    number: this.props.numberOfEvents,
    errorText: '',
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ number: value });
    if (value < 1) {
      this.setState({
        errorText: 'Select number from 1 to 32',
        number: 1,
      });
    } else if (value > 32) {
      this.setState({
        errorText: 'Select number from 1 to 32',
        number: 32,
      });
    } else {
      this.setState({
        errorText: '',
        number: value,
      });
      this.props.updateEvents(undefined, value);
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <p>How many events would you like to see?</p>
        <input
          type="number"
          className="num-events"
          value={this.state.number}
          onChange={this.handleInputChange}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
