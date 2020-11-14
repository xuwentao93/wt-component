/* eslint-disable max-len */
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import './index.less';
import { createComponentRootClassName, BasicProps, getClassName } from '../../utils/index';

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
    console.log(loading);
    if (loading) {
      console.log(10);
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
        <svg
          viewBox="0 0 1024 1024"
          width="14"
          height="14"
          className={`${ButtonStyle}-type`}
          style={{ marginRight: '6px', transform: `rotate(${rotate}deg)` }}
        >
          <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
        </svg>
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
