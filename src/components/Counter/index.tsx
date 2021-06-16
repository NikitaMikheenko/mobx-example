import React, { FC } from 'react';
import { observer } from 'mobx-react';
import store from '../../mobx/counter';
import styles from './index.module.css';

const Counter: FC = observer(() => {
  const { value, increment, decrement } = store;
  return (
    <div className={styles.counter}>
      <button type="button" onClick={increment}>
        +1
      </button>
      <h2 className={styles.counterValue}>{value}</h2>
      <button type="button" onClick={decrement}>
        -1
      </button>
    </div>
  );
});

export default Counter;
