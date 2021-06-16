import { makeObservable, observable, action, autorun } from 'mobx';
import { db } from '../../services/firebase';
import { ITodoList } from '../../interfaces/todoList';

class TodoList {
  constructor() {
    makeObservable(this);
    autorun(() => {
      db.ref('todo_list').on('child_added', (snapshot) => {
        this.todos.push(snapshot.val());
      });
    });
  }

  @observable
  todos: ITodoList[] = [];
  @observable
  newTodo = '';

  @action
  setNewTodo = (value: string) => {
    this.newTodo = value;
  };

  @action
  addTodo = async () => {
    const id = Date.now();
    await db.ref(`todo_list/${id}`).set({
      id,
      title: this.newTodo,
    });
    this.newTodo = '';
  };
}

export default new TodoList();
