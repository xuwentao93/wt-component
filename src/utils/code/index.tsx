import * as React from 'react';
import { useState } from 'react';
import './index.less';
import { createComponentRootClassName, getClassName } from '../index';

const CodeStyle = createComponentRootClassName('Code');

interface CodeProps {
  onClick: () => void,
  // eslint-disable-next-line react/no-unused-prop-types
  children?: React.ReactNode
}

export default function Code({
  onClick
}: CodeProps) {
  const CodeClass: Array<string> = [];
  const classNames = getClassName(CodeClass, CodeStyle, [CodeStyle]);

  const [showCode, setShowCode] = useState(false);

  const methods = {
    click(): void {
      setShowCode(!showCode);
      onClick();
    }
  };

  return (
    <div className={classNames} onClick={methods.click}>
      <img
        src="https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg"
        alt=""
        className={`${CodeStyle}-img ${showCode ? `${CodeStyle}-hide-img` : ''}`}
      />
      <img
        src="https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg"
        alt=""
        className={`${CodeStyle}-img ${!showCode ? `${CodeStyle}-hide-img` : ''}`}
      />
    </div>
  );
}

Code.defaultProps = {
  children: ''
};
