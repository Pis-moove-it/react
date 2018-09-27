import React from 'react';
import { hot } from 'react-hot-loader';
import CounterContainer from './home/CounterContainer';

const App = () => (
  <CounterContainer />
);

export default hot(module)(App);
