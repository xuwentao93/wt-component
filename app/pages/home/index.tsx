import * as React from 'react';
import './index.less';
import { createPageRootClassName } from '../../utils/index';

const home = createPageRootClassName('home');

export default function Home() {
  return (
    <div className={home}>home</div>
  );
}
