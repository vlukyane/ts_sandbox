import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allActions } from '../actions';

const useCounter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => dispatch(allActions.counter.increment());
  const decrement = () => dispatch(allActions.counter.decrement());
  const reset = () => dispatch(allActions.counter.reset());
  
  return {
    count, increment, decrement, reset,
  };
};

const Counter = () => {
  const {
    count, increment, decrement, reset,
  } = useCounter();

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
