/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Pages, { Introduce, Home, Profile } from '../pages';
import sidebarRouteRender from './sidebarRoute.tsx';
import Navigation from '../component/navigation';

const routes = Object.keys(Pages).map(item => ({
  component: () => sidebarRouteRender(Pages[item]),
  // component: Pages[item],
  path: `/component/${item.toLowerCase().slice(0, -4)}`,
  exact: true
}));

console.log(routes);

export default function App() {
  const navTitleList = [
    {
      name: '介绍',
      path: 'introduce'
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
      location.href = `${location.protocol}//${location.host}/${path}`;
    }
  };

  useEffect(() => {
    const curSelectedList = new Array(navTitleList.length).fill(false);
    const { pathname } = location;
    for (let i = 0; i < navTitleList.length; i++) {
      if (navTitleList[i].path.includes(pathname.slice(1))) {
        curSelectedList[i] = true;
        console.log(i);
      }
    }
    setSelectedList(curSelectedList);
  }, []);

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
        <Route component={Profile} path="/profile" exact />
        {routes.map(route => (
          <Route component={route.component} path={route.path} exact={route.exact} key={route.path} />
        ))}
      </Switch>
    </Router>
  );
}
