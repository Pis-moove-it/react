import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Counter from './home/CounterContainer';
import { increment, decrement } from './home/duck/actions';

const App = () => (
  <div className="counter">
    <Counter
      count={0}
      increment={increment}
      decrement={decrement}
    />
  </div>
);

export default hot(module)(App);
