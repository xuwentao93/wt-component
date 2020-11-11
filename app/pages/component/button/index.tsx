import * as React from 'react';
import './index.less';
import { createPageRootClassName } from '../../../utils/index';
import Button from '../../../component/button/index';

const button = createPageRootClassName('button');

export default function ButtonPage() {
  return (
    <div className={button}>
      <Button>button page</Button>
    </div>
  );
}
