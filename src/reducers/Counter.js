import { INCREMENT, DECREMENT } from '../constants/CounterActionTypes';

// Initial global state
const initialState = {
  count: 0,
};

// Change global state
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state, count: state.count - 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
