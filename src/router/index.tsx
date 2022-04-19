/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './index.less';
import { Introduce, Home, Profile } from '../pages';
import Navigation from '../component/navigation';
import ComponentPage from '../pages/component';
import { Github } from '@/icon/index';

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

export default function App() {
  const [selectedList, setSelectedList] = useState(new Array(navTitleList.length).fill(false));

  const methods = {
    changeSelected(path, index) {
      location.href = `${location.protocol}//${location.host}/${path}`;
    }
  };

  useEffect(() => {
    const curSelectedList = new Array(navTitleList.length).fill(false);
    const pathname = window.location.pathname.slice(1);
    for (let i = 0; i < curSelectedList.length; i++) {
      if ((pathname.indexOf('/') !== -1 && pathname.slice(0, pathname.indexOf('/') + 1) === navTitleList[i].path)
        || pathname === navTitleList[i].path) {
        curSelectedList[i] = true;
        setSelectedList(curSelectedList);
        break;
      }
    }
  }, []);

  return (
    <Router>
      <Navigation>
        <img src="https://findicons.com/files/icons/2787/beautiful_flat_icons/128/countdown.png" type="logo" alt="" />
        <div type="title">wt-component</div>
        {navTitleList.map((title, i) => (
          <div
            key={title.name}
            onClick={() => methods.changeSelected(`./${title.path}`, i)}
            style={{ color: selectedList[i] ? '#454bff' : '' }}
          >
            {title.name}
          </div>
        ))}
        <div style={{ flex: 1, minHeight: '1px' }} />
        <Github className="router-github-icon" link="https://github.com/xuwentao93/wt-component" />
      </Navigation>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Introduce} path="/introduce" exact />
        <Route component={Profile} path="/profile" exact />
        <Route component={ComponentPage} path="/component" />
      </Switch>
    </Router>
  );
}
