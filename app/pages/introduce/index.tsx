import * as React from 'react';
import './index.less';
import { createPageRootClassName } from '../../utils/index';

const introduce = createPageRootClassName('introduce');

export default function () {
  return (
    <div className={introduce}>introduce</div>
  );
}
