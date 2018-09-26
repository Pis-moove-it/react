import { createStore } from 'redux';
import rootReducer from '../reducers/Counter';

const req = require('../reducers/Counter');

// Configure Redux for Hot Module Replacement
export function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/Counter', () => {
      const nextRootReducer = req;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

/* eslint no-underscore-dangle: "off" */
const store = createStore(
  rootReducer,
  // To watch Redux store with ReduxDevTools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
