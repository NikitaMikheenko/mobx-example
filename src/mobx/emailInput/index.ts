import { makeAutoObservable } from 'mobx';

const regexp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class EmailInput {
  constructor() {
    makeAutoObservable(this);
  }

  value = '';

  setValue = (value: string): void => {
    this.value = value;
  };

  get isValid(): boolean {
    return regexp.test(this.value);
  }
}

export default EmailInput;
