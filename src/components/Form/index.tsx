import React, { FC } from 'react';
import { observer, Provider } from 'mobx-react';
import formStore from '../../mobx/form';
import NameInput from '../NameInput';
import EmailInput from '../EmailInput';
import styles from './index.module.css';

const Form: FC = observer(() => (
  <Provider nameStore={formStore.name} emailStore={formStore.email}>
    <div className={styles.form}>
      <h3>{`Nickname: ${formStore.nickname}`}</h3>
      <div>
        <NameInput />
        <EmailInput />
      </div>
      <input
        className={styles.formSubmit}
        type="submit"
        value="Submit"
        disabled={!formStore.isValid}
        onClick={() => console.log('Form submitted!')}
      />
    </div>
  </Provider>
));

export default Form;
