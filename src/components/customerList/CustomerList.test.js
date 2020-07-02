import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import CustomerList from './CustomerList';

const store = createStore(() => { return {}; });

describe('<CustomerList />', () => {
  test('Should match snapshot', () => {
    const props = {
      customers: {
        data: [],
        loading: false
      },
      getCustomers: () => {}
    }
    const component = create(
      <CustomerList {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
})
