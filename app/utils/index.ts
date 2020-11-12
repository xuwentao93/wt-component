export function createComponentRootClassName(component: string): string {
  return `wt-personal-component-root-${component}`;
}

export function createPageRootClassName(component: string): string {
  return `wt-personal-page-root-${component}`;
}

// eslint-disable-next-line max-len
export function getClassName(compClass: Array<string>, compName: string, otherClass: Array<string>): string {
  return [compName, ...compClass.map(item => `${compName}-${item}`), ...otherClass].join(' ');
}

export interface BasicProps {
  children: any,
  onClick?: Function,
  onMouseEnter?: Function,
  onMouseLeave?: Function,
  onLoad?: Function
}
