import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const incrementHandlerFiveTimes = () => {
    dispatch({ type: "increment5" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const decrementHandlerFivetimes = () => {
    dispatch({ type: "decrement5" });
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementHandlerFiveTimes}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decrementHandlerFivetimes}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
