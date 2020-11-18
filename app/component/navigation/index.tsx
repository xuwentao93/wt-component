import * as React from 'react';
import { useRef } from 'react';
import './index.less';
import { createComponentRootClassName, BasicProps, getClassName } from '@/utils/index.ts';

const NavigationStyle = createComponentRootClassName('Navigation');

interface NavigationProps extends BasicProps {
  fixed?: boolean,
  shadow?: boolean,
  selected?: boolean
}

export default function Navigation({
  children,
  fixed = false,
  shadow = true,
  selected = false,
  className = '',
  compRef = useRef(),
  style = {},
  ...rest
}: NavigationProps) {
  const NavigationClass: Array<string> = [selected ? 'selected' : ''];
  const classNames = getClassName(NavigationClass, NavigationStyle, [NavigationStyle, className]);
  return (
    <>
      <div
        className={classNames}
        style={{ ...style, position: fixed ? 'fixed' : 'static' }}
        ref={compRef}
        {...rest}
      >
        {children}
      </div>
      {fixed && <div style={{ width: '100%', height: '94px' }} />}
    </>
  );
}

Navigation.defaultProps = {
  fixed: false,
  shadow: true,
  selected: false
};
