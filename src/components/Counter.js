import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { counterAction } from "../Store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const incrementHandlerNTimes = () => {
    dispatch(counterAction.increase(2));
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const decrementHandlerNtimes = () => {
    dispatch(counterAction.decrease(2));
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementHandlerNTimes}>Increment by 2</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decrementHandlerNtimes}>Decrement by 2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
