import * as React from 'react';
import { useRef } from 'react';
import './index.less';
import {
  createComponentRootClassName,
  BasicProps,
  getClassName,
  spellError
} from '@/utils/index.ts';

const dark = 'dark';
const light = 'light';

const SidebarStyle = createComponentRootClassName('Sidebar');

interface SidebarProps extends BasicProps {
  theme?: 'dark' | 'light',
  shrink?: boolean
}

export default function Sidebar({
  children,
  theme = light,
  shrink = false,
  className = '',
  compRef = useRef()
}: SidebarProps) {
  if (theme !== dark && theme !== light) spellError('theme');
  const SidebarClass: Array<string> = [shrink ? 'shrink' : '', theme === dark ? dark : light];
  const classNames = getClassName(SidebarClass, SidebarStyle, [SidebarStyle, className]);
  return (
    <div className={classNames} ref={compRef}>{children}</div>
  );
}

Sidebar.defaultProps = {
  theme: light,
  shrink: false
};
