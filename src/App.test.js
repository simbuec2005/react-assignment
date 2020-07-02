import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';

const store = createStore(() => { return {}; });

describe('<App />', () => {
  test('Should match snapshot', () => {
    const component = create(<Provider store={store}>
      <App />
    </Provider>);
    expect(component.toJSON()).toMatchSnapshot();
  });
})
