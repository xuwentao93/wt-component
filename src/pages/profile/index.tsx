import * as React from 'react';
import './index.less';
import * as x from '../../../dist/index.js';
import { createPageRootClassName } from '../../utils/index';

const Profile = createPageRootClassName('Profile');

export default function ProfilePage() {
  console.log(x);
  return (
    <div className={Profile}>
      132
    </div>
  );
}
