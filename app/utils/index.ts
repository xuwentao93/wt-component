import * as React from 'react';

export function createComponentRootClassName(component: string): string {
  return `wt-personal-component-root-${component}`;
}

export function createPageRootClassName(component: string): string {
  return `wt-personal-page-root-${component}`;
}

// eslint-disable-next-line max-len
export function getClassName(compClass: Array<string>, compName: string, otherClass: Array<string>): string {
  return [...compClass.map(item => (item === '' ? '' : `${compName}-${item}`)), ...otherClass].join(' ');
}

export interface BasicProps {
  children?: any,
  style?: object,
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void,
  onMouseEnter?: (e?: React.MouseEvent<HTMLDivElement>) => void,
  onMouseLeave?: (e?: React.MouseEvent<HTMLDivElement>) => void,
  onLoad?: (e?: React.SyntheticEvent<HTMLDivElement>) => void
}
