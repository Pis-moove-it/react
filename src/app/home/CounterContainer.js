import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './MessageComponent';
import Button from './ButtonComponent';

// Map the global state to the props of a component
const mapStateToProps = state => ({ count: state.count });

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
      <Message>
        Counter:
        {' '}
        {count}
      </Message>
      <Button onClick={increment}>
        +
      </Button>
      <Button onClick={decrement}>
        -
      </Button>
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
