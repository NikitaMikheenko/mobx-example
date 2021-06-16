import React, { FC } from 'react';
import { inject } from 'mobx-react';
import { IFormStores } from '../../interfaces/form';
import styles from './index.module.css';

interface IEmailInputProps {
  value?: string;
  setValue?: (value: string) => void;
  isValid?: boolean;
}

const EmailInput: FC<IEmailInputProps> = ({ value, setValue, isValid }) => (
  <div className={styles.emailInput}>
    <div className={styles.emailInputBlock}>
      <label>Email:</label>
      <input type="email" value={value} onChange={(e) => setValue?.(e.target.value)} />
    </div>
    {!isValid && <p>Incorrect email!</p>}
  </div>
);

export default inject(
  ({ emailStore }: IFormStores): IEmailInputProps => ({
    value: emailStore.value,
    setValue: emailStore.setValue,
    isValid: emailStore.isValid,
  }),
)(EmailInput);
