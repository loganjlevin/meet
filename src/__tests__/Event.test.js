import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let mockEvent, EventWrapper;
  beforeAll(() => {
    mockEvent = mockData[0];
    EventWrapper = shallow(<Event event={mockEvent} />);
  });

  test('Event summary is rendered correctly', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
    expect(EventWrapper.find('.summary').text()).toEqual(mockEvent.summary);
  });

  test('Event start time is rendered correctly', () => {
    expect(EventWrapper.find('.start-time')).toHaveLength(1);
    expect(EventWrapper.find('.start-time').text()).toEqual(
      new Date(mockEvent.start.dateTime).toString()
    );
  });

  test('Event location is rendered correctly', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
    expect(EventWrapper.find('.location').text()).toEqual(
      `@${mockEvent.summary} | ${mockEvent.location}`
    );
  });

  test('Show details button is rendered when state is false', () => {
    EventWrapper.setState({ detailsShown: false });
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });
  test('Change state when show details button is clicked', () => {
    EventWrapper.setState({ detailsShown: false });
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.state('detailsShown')).toBe(true);
  });
  test(`Show 'About' header when state is true`, () => {
    EventWrapper.setState({ detailsShown: true });
    expect(EventWrapper.find('.about')).toHaveLength(1);
  });
  test('Event link is rendered correctly when state is true', () => {
    EventWrapper.setState({ detailsShown: true });
    expect(EventWrapper.find('.link')).toHaveLength(1);
    expect(EventWrapper.find('.link').prop('href')).toEqual(mockEvent.htmlLink);
  });
  test('Event description is rendered correctly when state is true', () => {
    EventWrapper.setState({ detailsShown: true });
    expect(EventWrapper.find('.description')).toHaveLength(1);
    expect(EventWrapper.find('.description').text()).toEqual(
      mockEvent.description
    );
  });
  test('Hide details button is rendered when state is true', () => {
    EventWrapper.setState({ detailsShown: true });
    expect(EventWrapper.find('.hide-details')).toHaveLength(1);
  });
  test('Change state when hide details button is clicked', () => {
    EventWrapper.setState({ detailsShown: true });
    EventWrapper.find('.hide-details').simulate('click');
    expect(EventWrapper.state('detailsShown')).toBe(false);
  });
});
