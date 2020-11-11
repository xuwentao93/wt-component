import * as React from 'react';
import './index.less';
import { createPageRootClassName } from '../../../utils/index';
import Input from '../../../component/input/index';

const input = createPageRootClassName('input');

export default function InputPage() {
  return (
    <div className={input}>
      <Input />
    </div>
  );
}
