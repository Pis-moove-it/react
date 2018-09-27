import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import CounterContainer from './home/CounterContainer';

const App = () => (
  <CounterContainer />
);

export default hot(module)(App);
