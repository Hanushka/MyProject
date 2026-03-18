import React, { useState } from "react";
import styles from './counter.module.css';

const Counter = () => {
  // Initial state
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <h2>Count: {count}</h2>
      <div className={styles['button-row']}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};
export default Counter;
