import * as React from 'react';
import { useHistory } from 'react-router-dom';
import './sidebarRoute.less';
import { createPageRootClassName } from '@/utils/index.ts';
import { Menu, Sidebar } from '@/component/index';
import { MenuList } from './constant';

const { SubMenu } = Menu;

const SidebarRoute = createPageRootClassName('Sidebar-route');

export default function SidebarRouteHOC(Component: any) {
  const histroy = useHistory();
  const methods = {
    changeRoute(path: string | void) {
      if (!path) return;
      histroy.push(`/${path}`);
    }
  };
  return (
    <div className={SidebarRoute}>
      <div>
        <Sidebar theme="light">
          {MenuList.map(menu => (
            <Menu title={menu.title} key={menu.title}>
              {menu.subMenu && menu.subMenu.map(sub => (
                <SubMenu key={sub.text} onClick={() => methods.changeRoute(sub.path)}>
                  {sub.text}
                </SubMenu>
              ))}
            </Menu>
          ))}
        </Sidebar>
      </div>
      <div className={`${SidebarRoute}-right`}>
        <Component />
      </div>
    </div>
  );
}
