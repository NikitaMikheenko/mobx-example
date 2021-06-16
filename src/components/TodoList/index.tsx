import React, { FC } from 'react';
import { observer } from 'mobx-react';
import todoList from '../../mobx/todoList';
import styles from './index.module.css';

const TodoList: FC = () => {
  const { todos, newTodo, setNewTodo, addTodo, removeTodo } = todoList;

  const todoListView = todos.map(({ id, title }) => {
    return (
      <div key={id} className={styles.todosItem}>
        <p>{title}</p>
        <span onClick={removeTodo.bind(null, id)}>x</span>
      </div>
    );
  });

  return (
    <div className={styles.todos}>
      <h2 className={styles.todosTitle}>{`Todo list`}</h2>
      {todoListView}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        placeholder="New todo"
      />
    </div>
  );
};

export default observer(TodoList);
