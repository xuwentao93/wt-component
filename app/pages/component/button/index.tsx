import * as React from 'react';
import './index.less';
import { createPageRootClassName } from '../../../utils/index';
import Button from '../../../component/button/index';

const button = createPageRootClassName('button');

export default function ButtonPage() {
  const methods = {
    test(): void {
      console.log(1);
    }
  };

  return (
    <div className={button}>
      <Button onClick={methods.test} onMouseEnter={methods.test}>button page</Button>
    </div>
  );
}
