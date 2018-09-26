import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Map the global state to the props of a component
const mapStateToProps = state => ({
  count: state.count,
});

// Dispatch an action to change the global state
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});

const Counter = (props) => {
  const {
    count,
  } = props;

  const {
    increment,
    decrement,
  } = props;

  return (
    <div className="counter-container">
      <h2 className="counter-message">
        Counter:
        {' '}
        {count}
      </h2>
      <div className="boton-aumentar">
        <button type="button" onClick={increment}>
          +
        </button>
      </div>
      <div className="boton-decrementar">
        <button type="button" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};

// Type checking of props
Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
