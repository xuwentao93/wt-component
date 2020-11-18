import * as React from 'react';
import { useHistory } from 'react-router-dom';
import './sidebarRoute.less';
import { createPageRootClassName } from '@/utils/index.ts';
import { Menu, Sidebar } from '@/component/index';

const { SubMenu } = Menu;

const SidebarRoute = createPageRootClassName('Sidebar-route');
const MenuList = [
  {
    title: '布局',
    selected: false,
    subMenu: []
  },
  {
    title: '基本',
    selected: false,
    subMenu: [
      {
        text: '测试',
        type: 'title'
      },
      {
        text: '按钮',
        selected: false,
        path: 'component/button'
      },
      {
        text: '输入框',
        selected: false,
        path: 'component/input'
      }
    ]
  },
  {
    title: '数据渲染',
    selected: false,
    subMenu: []
  },
  {
    title: '数据录入',
    selected: false,
    subMenu: []
  },
  {
    title: '交互提示',
    selected: false,
    subMenu: []
  }
];
// 基本, 布局, 数据渲染, 数据录入, 交互提示.
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
        <Sidebar>
          {MenuList.map(menu => (
            <Menu title={menu.title} selected={menu.selected} key={menu.title}>
              {menu.subMenu.map(sub => (
                <SubMenu key={sub.text} onClick={() => methods.changeRoute(sub.path)}>{sub.text}</SubMenu>
              ))}
            </Menu>
          ))}
        </Sidebar>
      </div>
      <Component />
    </div>
  );
}
