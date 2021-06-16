import React, { FC } from 'react';
import { inject } from 'mobx-react';
import { IFormStores } from '../../interfaces/form';
import styles from './index.module.css';

interface INameInputProps {
  value?: string;
  setValue?: (value: string) => void;
}

const NameInput: FC<INameInputProps> = ({ value, setValue }) => (
  <div className={styles.nameInput}>
    <label>Name:</label>
    <input type="text" value={value} onChange={(e) => setValue?.(e.target.value)} />
  </div>
);

export default inject(({ nameStore }: IFormStores) => ({ value: nameStore.value, setValue: nameStore.setValue }))(
  NameInput,
);
