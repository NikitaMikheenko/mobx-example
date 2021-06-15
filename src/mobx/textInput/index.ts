import { makeAutoObservable } from 'mobx';

class TextInput {
  constructor() {
    makeAutoObservable(this);
  }

  value = '';

  setValue = (value: string) => {
    this.value = value;
  };
}

export default new TextInput();
