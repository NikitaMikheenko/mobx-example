import { makeObservable, computed } from 'mobx';
import TextInput from '../textInput';
import EmailInput from '../emailInput';

class Form {
  constructor() {
    makeObservable(this);
    this.name = new TextInput();
    this.email = new EmailInput();
  }

  name;
  email;

  @computed
  get nickname() {
    console.log('nickname computed prop');
    return this.name.value && `${this.name.value}${Math.round(Math.random() * 100)}`;
  }

  @computed
  get isValid() {
    console.log('isValid computed prop');
    return this.email.isValid;
  }
}

export default new Form();
