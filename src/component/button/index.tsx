import * as React from 'react';
import { useRef } from 'react';
import Loading from '@/icon/loading';
import {
  createComponentRootClassName,
  BasicProps,
  getClassName,
  spellError
} from '@/utils';
import './index.less';

const ButtonStyle = createComponentRootClassName('Button');

interface ButtonProps extends BasicProps {
  loading?: boolean, // 加载中.
  type?: string, // 按钮类型(样式).
  arrow?: string, // 按钮箭头朝向.
  disabled?: boolean // 是否禁用.
}

function Button({
  children,
  loading,
  type = 'normal',
  arrow = '',
  compRef = useRef(),
  disabled = false,
  className = '',
  onClick,
  ...rest
}: ButtonProps) {
  const ButtonTypes: Array<string> = ['primary', 'normal', 'danger', 'warn'];
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
    <div className={classNames} {...rest} ref={compRef} onClick={disabled ? () => {} : onClick}>
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

export default React.memo(Button);
