/* eslint-disable max-len */
import * as React from 'react';
import { useRef } from 'react';
import { Loading } from '@/icon/index';
import './index.less';
import {
  createComponentRootClassName,
  BasicProps,
  getClassName,
  spellError
} from '@/utils/index.ts';

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
  className = '',
  ...rest
}: ButtonProps) {
  const ButtonTypes: Array<string | undefined> = ['primary', 'normal', 'danger', 'warn'];
  if (!ButtonTypes.includes(type)) {
    type = 'normal';
    spellError('type');
  }

  const buttonClass: Array<string> = [
    type,
    arrow,
    disabled ? 'disabled' : ''
  ];
  const otherClass: Array<string> = [ButtonStyle, className];
  const classNames: string = getClassName(buttonClass, ButtonStyle, otherClass);

  const triangleClass: Array<string> = [
    'triangle',
    `triangle-${arrow}`,
    type
  ];
  const triangleClassName: string = getClassName(triangleClass, ButtonStyle, []);

  return (
    <div className={classNames} {...rest} ref={compRef}>
      {arrow && <div className={triangleClassName} />}
      {loading && (
        <Loading
          className={`${ButtonStyle}-type`}
          style={{ marginRight: '6px' }}
          loading={loading}
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
