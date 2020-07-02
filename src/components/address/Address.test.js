import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Address from './Address';

const store = createStore(() => { return {}; });

describe('<Address />', () => {
  test('Should match snapshot', () => {
    const props = {
      customer: {
        "id": "123",
        "age": "25",
        "name": "Neil Amstrong"
      },
      getCustomerAddress: ()=> {}
    }
    const component = create(
      <Address {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
})
