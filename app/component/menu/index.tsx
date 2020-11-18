import * as React from 'react';
import { useRef } from 'react';
import SubMenu from './subMenu';
import './index.less';
import { createComponentRootClassName, BasicProps, getClassName } from '../../utils/index';

const MenuStyle = createComponentRootClassName('Menu');

interface MenuProps extends BasicProps {
  title?: string,
  selected?: boolean,
  subMenu?: Array<object>
}

export default function Menu({
  children,
  className = '',
  title = '',
  selected = false,
  subMenu = [],
  compRef = useRef()
}: MenuProps) {
  const MenuClass: Array<string> = [];
  const classNames = getClassName(MenuClass, MenuStyle, [MenuStyle, className]);
  return (
    <>
      <div className={classNames} ref={compRef}>
        <div className={`${MenuStyle}-title`}>{title}</div>
        {children}
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
