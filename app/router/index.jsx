/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './index.less';
import Pages, { Introduce, Home, Profile } from '../pages';
import sidebarRouteRender from './sidebarRoute.tsx';
import Navigation from '../component/navigation';
import { Github } from '@/icon/index';

const routes = Object.keys(Pages).map(item => ({
  component: () => sidebarRouteRender(Pages[item]),
  // component: Pages[item],
  path: `/component/${item.toLowerCase().slice(0, -4)}`,
  exact: true
}));

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

  return (
    <Router>
      <Navigation>
        <img src="https://findicons.com/files/icons/2787/beautiful_flat_icons/128/countdown.png" type="logo" alt="" />
        <div type="title">wt-component</div>
        {navTitleList.map((title, i) => (
          <div
            key={title.name}
            selected={selectedList[i]}
            onClick={() => methods.changeSelected(`./${title.path}`, i)}
          >
            {title.name}
          </div>
        ))}
        <div style={{ flex: 1, minHeight: '1px' }} />
        <Github className="router-github-icon" />
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
