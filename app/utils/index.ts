import * as React from 'react';

export function createComponentRootClassName(component: string): string {
  return `wt-component-root-${component}`;
}

export function createPageRootClassName(component: string): string {
  return `wt-page-root-${component}`;
}

// eslint-disable-next-line max-len
export function getClassName(compClass: Array<string>, compName: string, otherClass: Array<string>): string {
  return [...compClass.map(item => (item === '' ? '' : `${compName}-${item}`)), ...otherClass].join(' ');
}

export function spellError(prop: string): void {
  console.error(`输入的 ${prop} 有误, 可能会影响到正常样式, 请检查拼写是否正确.`);
}

export interface BasicProps {
  children?: React.ReactChild,
  style?: React.CSSProperties,
  compRef?: any,
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void,
  onMouseEnter?: (e?: React.MouseEvent<HTMLDivElement>) => void,
  onMouseLeave?: (e?: React.MouseEvent<HTMLDivElement>) => void,
  onLoad?: (e?: React.SyntheticEvent<HTMLDivElement>) => void
}

export interface IconProps {
  style?: object,
  className?: string
}
