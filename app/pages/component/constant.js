import Pages, { Introduce } from '../index';

export const MenuList = [
  {
    title: '布局',
    subMenu: [
      {
        text: 'Navigation 导航栏',
        path: 'component/navigation'
      },
      {
        text: 'Sidebar 侧边栏',
        path: 'component/sidebar'
      }
    ],
    canCollapse: true
  },
  {
    title: '基本',
    subMenu: [
      {
        text: 'Button 按钮',
        path: 'component/button'
      },
      {
        text: 'Input 输入框',
        path: 'component/input'
      }
    ],
    canCollapse: true
  },
  {
    title: '数据渲染',
    subMenu: [],
    canCollapse: true
  },
  {
    title: '数据录入',
    subMenu: [
      {
        text: 'Table 表格',
        path: 'component/table'
      }
    ],
    canCollapse: true
  },
  {
    title: '交互提示',
    subMenu: [],
    canCollapse: true
  },
  {
    title: 'test',
    canCollapse: false
  }
];

export const routes = Object.keys(Pages).map(item => ({
  component: Pages[item],
  path: `/component/${item.toLowerCase().slice(0, -4)}`,
  exact: true
}));
