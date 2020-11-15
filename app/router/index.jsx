import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from 'react-router-dom';
import Pages, { Introduce, Home } from '../pages';
import Navigation from '../component/navigation';

const routes = Object.keys(Pages).map(item => ({
  component: Pages[item],
  path: `/component/${item.toLowerCase().slice(0, -4)}`,
  exact: true
}));

export default function App() {
  const history = useHistory();
  console.log(history);

  const navTitleList = [
    {
      name: '介绍',
      path: '/introduce'
    },
    {
      name: '组件',
      path: 'component'
    },
    {
      name: '关于我',
      path: 'profile'
    }
  ];

  const [selectedList, setSelectedList] = useState(new Array(navTitleList.length).fill(false));

  const methods = {
    changeSelected(path, index) {
      const curSelectedList = new Array(navTitleList.length).fill(false);
      curSelectedList[index] = true;
      setSelectedList(curSelectedList);
      history.push(path);
    }
  };

  return (
    <Router>
      <Navigation>
        {navTitleList.map((title, i) => (
          <div
            key={title.name}
            selected={selectedList[i]}
            onClick={() => methods.changeSelected(`./${title.path}`, i)}
          >
            {title.name}
          </div>
        ))}
        <div style={{ flex: 1, minHeight: 'px' }} />
        <div>test</div>
      </Navigation>
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
