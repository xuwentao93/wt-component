import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import component from '../component';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route component={component.Button} path="/" />
        <Route component={Hello} path="/test" />
      </Switch>
    </Router>
  );
}

function Hello() {
  return (
    <div>hello world!</div>
  );
}
