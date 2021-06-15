import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import FlowImage from './components/FlowImage';
import Counter from './components/Counter';

const App: FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/flow-image" component={FlowImage} />
        <Route path="/counter" component={Counter} />
      </Switch>
    </>
  );
};

export default App;
