import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import FlowImage from './components/FlowImage';
import Counter from './components/Counter';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App: FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/flow-image" component={FlowImage} />
        <Route path="/counter" component={Counter} />
        <Route path="/form" component={Form} />
        <Route path="/todo-list" component={TodoList} />
      </Switch>
    </>
  );
};

export default App;
