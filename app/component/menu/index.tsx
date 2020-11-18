import * as React from 'react';
import { useRef } from 'react';
import './index.less';
import { createComponentRootClassName, BasicProps, getClassName } from '../../utils/index';

const MenuStyle = createComponentRootClassName('Menu');

interface MenuProps extends BasicProps {}

export default function Menu({
  children,
  compRef = useRef()
}: MenuProps) {
  const MenuClass: Array<string> = [];
  const className = getClassName(MenuClass, MenuStyle, [MenuStyle]);
  return (
    <div className={className} ref={compRef}>{children}</div>
  );
}

Menu.defaultProps = {};
