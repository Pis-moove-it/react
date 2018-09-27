import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import App from '../../src/app/App';

it('renders without crashing', () => {
  shallow(<App />);
});
