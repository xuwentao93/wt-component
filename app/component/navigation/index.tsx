import * as React from 'react';
import { useRef } from 'react';
import './index.less';
import { createComponentRootClassName, BasicProps, getClassName } from '../../utils/index';

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
  compRef = useRef(),
  style = {},
  ...rest
}: NavigationProps) {
  const NavigationClass: Array<string> = [];
  const className = getClassName(NavigationClass, NavigationStyle, [NavigationStyle]);
  return (
    <>
      <div
        className={className}
        style={{ ...style, position: fixed ? 'fixed' : 'static', color: selected ? '#454bff' : '#333' }}
        {...rest}
      >
        {children}
      </div>
      {fixed && <div style={{ width: '100%', height: '64px' }} />}
    </>
  );
}

Navigation.defaultProps = {
  fixed: false,
  shadow: true,
  selected: false
};
