import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import { Provider } from 'react-redux';
import App from '../../src/App';
import store from '../../src/store/index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div,
  );
});

it('renders without crashing', () => {
  shallow(<App />);
});
