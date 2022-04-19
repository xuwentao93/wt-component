import * as React from 'react';
import { useRef, createContext } from 'react';
import './index.less';
import {
  createComponentRootClassName,
  BasicProps,
  getClassName,
  spellError,
  typeError,
  getType
} from '@/utils/index.ts';

const dark = 'dark';
const light = 'light';

const SidebarStyle = createComponentRootClassName('Sidebar');

interface Theme {
  color?: string,
  background?: string,
  active?: string,
  hover?: string,
  selected?: string
}

interface SidebarProps extends BasicProps {
  theme?: 'dark' | 'light' | Theme,
  shrink?: boolean
}

export const ThemeContext = createContext({});

export default function Sidebar({
  children,
  theme = light,
  shrink = false,
  className = '',
  compRef = useRef()
}: SidebarProps) {
  if (theme !== dark && theme !== light) spellError('theme');
  const SidebarClass: Array<string> = [shrink ? 'shrink' : ''];
  if (theme === dark) {
    SidebarClass.push(dark);
  } else if (theme === light) {
    SidebarClass.push(light);
  } else if (getType(theme) !== 'Object') {
    if (getType(theme) === 'String') {
      spellError('theme');
    } else {
      typeError('theme');
    }
  }
  const classNames = getClassName(SidebarClass, SidebarStyle, [SidebarStyle, className]);

  return (
    <div className={classNames} ref={compRef}>
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}

Sidebar.defaultProps = {
  theme: light,
  shrink: false
};
