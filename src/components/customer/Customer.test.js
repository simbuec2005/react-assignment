import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Customer from './Customer';

const store = createStore(() => { return {}; });

describe('<Customer />', () => {
  test('Should match snapshot', () => {
    const props = {
      detail: {
        "id": "123",
        "age": "25",
        "name": "Neil Amstrong"
      },
      handleClick: ()=> {}
    }
    const component = create(
      <Customer {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
})
