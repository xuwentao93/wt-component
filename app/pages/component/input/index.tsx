import * as React from 'react';
import './index.less';
import { createPageRootClassName } from '../../../utils/index';
import Input from '../../../component/input/index';

const input = createPageRootClassName('input');

export default function InputPage() {
  const methods = {
    focus() {
      console.log('focus!');
    },
    blur() {
      console.log('blur!');
    },
    change(value: any) {
      console.log(value);
    }
  };
  return (
    <div className={input}>
      <Input
        onFocus={methods.focus}
        onBlur={methods.blur}
        onChange={e => methods.change(e.target)}
      />
    </div>
  );
}
