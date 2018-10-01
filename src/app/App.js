import React from 'react';
import { hot } from 'react-hot-loader';
import FooterComponent from './common/FooterComponent';

const today = new Date();

const App = () => (
  <div>
    <FooterComponent>
      {'\u00A9'}
      {'PIS'}
      {' '}
      {today.getFullYear()}
    </FooterComponent>
  </div>);

export default hot(module)(App);
