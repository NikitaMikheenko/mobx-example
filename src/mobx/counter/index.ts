import { makeObservable, observable, action } from 'mobx';

class Counter {
  constructor() {
    makeObservable(this);
  }

  @observable value = 0;

  @action increment = () => {
    this.value++;
  };

  @action decrement = () => {
    this.value--;
  };
}

export default new Counter();
