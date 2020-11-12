import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pages, { Introduce, Home } from '../pages';

const routes = Object.keys(Pages).map(item => ({
  component: Pages[item],
  path: `/component/${item.toLowerCase().slice(0, -4)}`,
  exact: true
}));

export default function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Introduce} path="/introduce" exact />
        {routes.map(route => (
          <Route component={route.component} path={route.path} exact={route.exact} key={route.path} />
        ))}
      </Switch>
    </Router>
  );
}
