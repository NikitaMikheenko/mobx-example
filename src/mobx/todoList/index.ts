import { makeObservable, observable, action, autorun } from 'mobx';
import { db } from '../../services/firebase';
import { ITodoList } from '../../interfaces/todoList';

class TodoList {
  constructor() {
    makeObservable(this);
    autorun(() => {
      db.ref('todo_list').on('value', (snapshot) => {
        const todos: ITodoList[] = [];
        snapshot.forEach((item) => {
          todos.push(item.val());
        });
        this.todos = todos;
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
    const title = this.newTodo;

    this.newTodo = '';

    await db.ref(`todo_list/${id}`).set({
      id,
      title,
    });
  };

  @action
  removeTodo = async (id: string) => {
    await db.ref(`todo_list/${id}`).remove();
  };
}

export default new TodoList();
