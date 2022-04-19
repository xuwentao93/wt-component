import * as React from 'react';
import './index.less';
import { createPageRootClassName } from '../../utils/index';

const Profile = createPageRootClassName('Profile');

export default function ProfilePage() {
  return (
    <div className={Profile}>Profile</div>
  );
}
    