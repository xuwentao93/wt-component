import * as React from 'react';
import { useHistory, Route } from 'react-router-dom';
import './index.less';
import { createPageRootClassName } from '@/utils/index.ts';
import { Menu, Sidebar } from '@/component';
import { MenuList, routes } from './constant';

const { SubMenu } = Menu;

const ComponentRoute = createPageRootClassName('Component-route');

export default function ComponentPage() {
  const histroy = useHistory();
  const methods = {
    changeRoute(path: string | void) {
      if (!path) return;
      histroy.push(`/${path}`);
    }
  };
  return (
    <div className={ComponentRoute}>
      <div>
        <Sidebar theme="light">
          {MenuList.map(menu => (
            <Menu title={menu.title} key={menu.title} canCollapse={menu.canCollapse}>
              {menu.subMenu && menu.subMenu.map(sub => (
                <SubMenu key={sub.text} onClick={() => methods.changeRoute(sub.path)}>
                  {sub.text}
                </SubMenu>
              ))}
            </Menu>
          ))}
        </Sidebar>
      </div>
      <div className={`${ComponentRoute}-right`}>
        {routes.map(route => (
          <Route component={route.component} path={route.path} exact={route.exact} key={route.path} />
        ))}
      </div>
    </div>
  );
}
