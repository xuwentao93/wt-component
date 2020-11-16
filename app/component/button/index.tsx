/* eslint-disable max-len */
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Loading } from '@/icon/index';
import './index.less';
import { createComponentRootClassName, BasicProps, getClassName } from '@/utils/index.ts';

console.log(Loading);

const ButtonStyle = createComponentRootClassName('Button');

interface ButtonProps extends BasicProps {
  loading?: boolean,
  type?: string,
  arrow?: string,
  disabled?: boolean
}

export default function Button({
  children,
  loading,
  type = 'normal',
  arrow = '',
  compRef = useRef(),
  disabled = false,
  ...rest
}: ButtonProps) {
  const ButtonTypes: Array<string | undefined> = ['primary', 'normal', 'danger', 'warn'];
  if (!ButtonTypes.includes(type)) {
    type = 'normal';
    console.warn('输入的 type 有误, 可能会影响到正常样式, 请检查拼写是否正确.');
  }

  const buttonClass: Array<string> = [
    type,
    arrow,
    disabled ? 'disabled' : ''
  ];
  const otherClass: Array<string> = [ButtonStyle];
  const className: string = getClassName(buttonClass, ButtonStyle, otherClass);

  const triangleClass: Array<string> = [
    'triangle',
    `triangle-${arrow}`,
    type
  ];
  const triangleClassName: string = getClassName(triangleClass, ButtonStyle, []);

  const [rotate, setRotate] = useState(0);

  let timer: any = null;

  useEffect(() => {
    if (loading) {
      timer = setInterval(() => {
        setRotate(degree => (degree === 360 ? 5 : degree + 5));
      }, 13);
    } else clearInterval(timer);
    return () => clearInterval(timer);
  }, [loading]);

  return (
    <div className={className} {...rest} ref={compRef}>
      {arrow && <div className={triangleClassName} />}
      {loading && (
        <Loading
          className={`${ButtonStyle}-type`}
          style={{ marginRight: '6px', transform: `rotate(${rotate}deg)` }}
        />
      )}
      {children}
    </div>
  );
}

Button.defaultProps = {
  loading: false,
  type: 'normal',
  arrow: '',
  disabled: false
};
