import * as React from 'react';
import './sidebarRoute.less';
import { createPageRootClassName } from '@/utils/index.ts';
import Sidebar from '@/component/sidebar/index.tsx';

const SidebarRoute = createPageRootClassName('Sidebar-route');

export default function SidebarRouteHOC(Component: any) {
  return (
    <div className={SidebarRoute}>
      <div>
        <Sidebar>
          1
        </Sidebar>
      </div>
      <Component />
    </div>
  );
}
