import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './app/App';

// const req = require('./reducers');

// Configure Redux for Hot Module Replacement
// function configureStore(initialState) {
//   const store = createStore(rootReducer, initialState);

//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('../reducers/Counter', () => {
//       const nextRootReducer = req;
//       store.replaceReducer(nextRootReducer);
//     });
//   }

//   return store;
// }

/* eslint no-underscore-dangle: "off" */
const store = createStore(
  rootReducer,
  // To watch Redux store with ReduxDevTools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
