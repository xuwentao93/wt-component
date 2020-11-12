import * as React from 'react';
// import { useState } from 'react';
import './index.less';
import { createComponentRootClassName, BasicProps, getClassName } from '../../utils/index';

const buttonStyle = createComponentRootClassName('button');

interface ButtonProps extends BasicProps {
  loading?: boolean,
  type?: string
}

export default function Button({
  children,
  loading,
  type,
  ...rest
}: ButtonProps) {
  const buttonClass: Array<string> = [
    type || 'normal'
  ];
  const otherClass: Array<string> = [];
  const className: string = getClassName(buttonClass, buttonStyle, otherClass);
  const methods = {
    test(): void {
      console.log(1);
    }
  };

  return (
    <div className={className}>
      {children}
    </div>
  );
}

Button.defaultProps = {
  loading: false,
  type: 'normal'
};
