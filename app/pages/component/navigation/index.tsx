import * as React from 'react';
import './index.less';
import { createPageRootClassName } from '../../../utils/index';

const Navigation = createPageRootClassName('Navigation');

export default function NavigationPage() {
  return (
    <div className={Navigation}>Navigation</div>
  );
}
