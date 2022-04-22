import * as React from 'react';
import './index.less';
import { createComponentRootClassName, BasicProps, getClassName } from '@/utils';

const InputStyle = createComponentRootClassName('Input');

interface InputProps extends BasicProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void,
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void,
  icon?: any,
  prefix?: any,
  suffix?: any,
  value?: any,
  placeholder?: string
}

export default function Input({
  onChange,
  prefix = null,
  suffix = null,
  style = {},
  icon = null,
  className = '',
  ...rest
}: InputProps) {
  const InputClass: Array<string> = [];
  const classNames = getClassName(InputClass, InputStyle, [InputStyle, className]);
  return (
    <span style={{ display: 'table' }}>
      {prefix && (
        <span className={`${InputStyle}-fix`}>{prefix}</span>
      )}
      <span style={{ position: 'relative' }}>
        {icon && <span className={`${InputStyle}-icon`}>{icon}</span>}
        <input
          className={classNames}
          style={{
            borderRadius: (prefix || suffix) ? '0' : '3px',
            display: (prefix || suffix) ? 'table-cell' : 'inline-block',
            paddingLeft: icon ? '30px' : '8px',
            ...style
          }}
          onChange={onChange}
          {...rest}
        />
      </span>
      {suffix && (
        <span className={`${InputStyle}-fix`}>{suffix}</span>
      )}
    </span>
  );
}

Input.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  value: undefined,
  prefix: null,
  suffix: null,
  icon: null,
  placeholder: ''
};
