import { computed, makeObservable } from 'mobx';
import TextInput from '../textInput';
import EmailInput from '../emailInput';

class Form {
  constructor() {
    makeObservable(this);
  }

  name = TextInput;
  email = EmailInput;

  @computed
  get nickname() {
    return `${this.name}${Math.round(Math.random() * 100)}`;
  }
}

export default new Form();
