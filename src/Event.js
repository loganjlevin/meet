import React, { Component } from 'react';

class Event extends Component {
  state = {
    detailsShown: false,
  };
  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="start-time">
          {new Date(event.start.dateTime).toString()}
        </p>
        <p className="location">{`@${event.summary} | ${event.location}`}</p>
        {this.state.detailsShown ? (
          <div className="event-details">
            <h4 className="about">About event:</h4>
            <p>
              <a href={event.htmlLink} className="link">
                See details on Google Calendar
              </a>
            </p>
            <p className="description">{event.description}</p>
            <button
              className="hide-details"
              onClick={() => {
                this.setState({ detailsShown: false });
              }}
            >
              Hide Details
            </button>
          </div>
        ) : (
          <button
            className="show-details"
            onClick={() => {
              this.setState({ detailsShown: true });
            }}
          >
            Show Details
          </button>
        )}
      </div>
    );
  }
}
export default Event;
