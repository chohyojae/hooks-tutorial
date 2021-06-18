import React, { useReducer } from 'react';

const reducer = (state, action) => {
  let retval;
  switch (action.type) {
    case 'INCREMENT':
      retval = { value: state.value + 1 };
      break;
    case 'DECREMENT':
      retval = { value: state.value - 1 };
      break;
    default:
      retval = state;
  }
  return retval;
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter;
