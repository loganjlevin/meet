import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberofEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });
  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.num-events')).toHaveLength(1);
  });
  test('render number input correctly', () => {
    const number = NumberOfEventsWrapper.state('number');
    expect(NumberOfEventsWrapper.find('.num-events').prop('value')).toBe(
      number
    );
  });
  test('change state when number input changes', () => {
    NumberOfEventsWrapper.setState({
      number: 32,
    });
    const eventObject = { target: { value: 24 } };
    NumberOfEventsWrapper.find('.num-events').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('number')).toBe(24);
  });
});
