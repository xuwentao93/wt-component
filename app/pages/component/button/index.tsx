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
      <Button
        onClick={methods.test}
        onMouseEnter={methods.test}
        style={{ fontSize: '20px' }}
        arrow="bottom"
      >
        button page
      </Button>
      <Button type="primary" style={{ marginTop: '20px' }} arrow="left">213</Button>
      <Button type="danger" style={{ marginTop: '20px' }} arrow="right">213</Button>
      <Button type="warn" style={{ marginTop: '20px' }} arrow="top">213</Button>
    </div>
  );
}
