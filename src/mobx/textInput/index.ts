import { makeAutoObservable } from 'mobx';

class TextInput {
  constructor() {
    makeAutoObservable(this);
  }

  value = '';

  setValue = (value: string): void => {
    this.value = value;
  };
}

export default TextInput;
