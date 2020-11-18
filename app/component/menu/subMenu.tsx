import * as React from 'react';
import { useRef } from 'react';
import './subMenu.less';
import { createComponentRootClassName, BasicProps, getClassName } from '../../utils/index';

const SuBMenuStyle = createComponentRootClassName('Sub-menu');

interface SuBMenuProps extends BasicProps {}

export default function SubMenu({
  children,
  className = '',
  compRef = useRef(),
  ...rest
}: SuBMenuProps) {
  const SuBMenuClass: Array<string> = [];
  const classNames = getClassName(SuBMenuClass, SuBMenuStyle, [SuBMenuStyle, className]);
  return (
    <div className={classNames} ref={compRef} {...rest}>{children}</div>
  );
}

SubMenu.defaultProps = {};
