import * as React from 'react';
import { useRef, useContext } from 'react';
import { ThemeContext } from '@/component/sidebar/index.tsx';
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
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={classNames} ref={compRef} {...rest}>{children}</div>
  );
}

SubMenu.defaultProps = {};
