import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Counter from './components/Counter';

const App = () => (
  <div className="counter">
    <Counter />
  </div>
);

export default hot(module)(App);
