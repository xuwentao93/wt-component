import * as React from 'react';
import './index.less';
import { createComponentRootClassName, BasicProps, getClassName } from '../../utils/index';

const InputStyle = createComponentRootClassName('Input');

interface InputProps extends BasicProps {
  onChange?: (e: React.ChangeEvent<HTMLDivElement>) => void,
  onBlur?: (e?: React.FocusEvent<HTMLDivElement>) => void,
  onFocus?: (e?: React.FocusEvent<HTMLDivElement>) => void,
  value?: any
}

export default function Input({
  onChange,
  ...rest
}: InputProps) {
  const InputClass: Array<string> = [];
  const className = getClassName(InputClass, InputStyle, []);
  return (
    <input
      className={className}
      onChange={onChange}
      {...rest}
    />
  );
}

Input.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  value: null
};
