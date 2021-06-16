import React, { FC } from 'react';
import { observer } from 'mobx-react';
import todoList from '../../mobx/todoList';
import styles from './index.module.css';

const TodoList: FC = () => {
  const { todos, newTodo, setNewTodo, addTodo } = todoList;

  const todoListView = todos.map(({ id, title }) => {
    return <p key={id}>{title}</p>;
  });

  return (
    <div className={styles.todos}>
      <h2>TodoList</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        placeholder="New todo"
      />
      {todoListView}
    </div>
  );
};

export default observer(TodoList);
