import * as React from 'react';
import './index.less';
import { createComponentRootClassName } from '../../utils/index';

const buttonStyle = createComponentRootClassName('button');

interface Props {
  children: any
}

export default function Button({ children }: Props) {
  const methods = {
    test(): void {
      console.log(1);
    }
  };

  return <div onClick={methods.test} className={buttonStyle}>{children}</div>;
}
