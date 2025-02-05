/* eslint-disable react/button-has-type */
import { useState } from 'react';
import styles from './Counter.module.css';

function Counter() {
  const [count, setCount] = useState(0);
  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className={styles.App}>
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className={styles.minus}>
          - Минус
        </button>
        <button onClick={onClickPlus} className={styles.plus}>
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default Counter;
