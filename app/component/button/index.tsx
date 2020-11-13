import * as React from 'react';
// import { useState } from 'react';
import './index.less';
import { createComponentRootClassName, BasicProps, getClassName } from '../../utils/index';

const buttonStyle = createComponentRootClassName('button');

interface ButtonProps extends BasicProps {
  loading?: boolean,
  type?: string,
  arrow?: string
}

export default function Button({
  children,
  loading,
  type = 'normal',
  arrow = '',
  ...rest
}: ButtonProps) {
  const ButtonTypes: Array<string | undefined> = ['primary', 'normal', 'danger', 'warn'];
  if (!ButtonTypes.includes(type)) {
    type = 'normal';
    console.warn('输入的 type 有误, 可能会影响到正常样式, 请检查拼写是否正确.');
  }

  const buttonClass: Array<string> = [
    type,
    arrow
  ];
  const otherClass: Array<string> = [buttonStyle];
  const className: string = getClassName(buttonClass, buttonStyle, otherClass);

  const triangleClass: Array<string> = [
    'triangle',
    `triangle-${arrow}`,
    type
  ];
  const triangleClassName: string = getClassName(triangleClass, buttonStyle, []);
  const methods = {};

  return (
    <div className={className} {...rest}>
      {arrow && <div className={triangleClassName} />}
      {children}
    </div>
  );
}

Button.defaultProps = {
  loading: false,
  type: 'normal',
  arrow: ''
};
