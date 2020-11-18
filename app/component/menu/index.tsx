import * as React from 'react';
import { useRef, useContext } from 'react';
import SubMenu from './subMenu';
import { ThemeContext } from '@/component/sidebar/index.tsx';
import './index.less';
import { createComponentRootClassName, BasicProps, getClassName } from '../../utils/index';

const MenuStyle = createComponentRootClassName('Menu');

interface MenuProps extends BasicProps {
  title?: string,
  selected?: boolean
}

export default function Menu({
  children,
  className = '',
  title = '',
  selected = false,
  compRef = useRef()
}: MenuProps) {
  const MenuClass: Array<string> = [];
  const classNames = getClassName(MenuClass, MenuStyle, [MenuStyle, className]);
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className={classNames} ref={compRef}>
        <div className={`${MenuStyle}-title`}>{title}</div>
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
      </div>
    </>
  );
}

Menu.SubMenu = SubMenu;

Menu.defaultProps = {
  title: '',
  selected: false,
  subMenu: []
};
