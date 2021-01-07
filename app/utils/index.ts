import * as React from 'react';

export function createComponentRootClassName(component: string): string {
  return `wt-component-root-${component}`;
}

export function createPageRootClassName(component: string): string {
  return `wt-page-root-${component}`;
}

export function createIconRootClassName(component: string): string {
  return `wt-icon-root-${component}`;
}

// eslint-disable-next-line max-len
export function getClassName(compClass: Array<string>, compName: string, otherClass: Array<string>): string {
  // eslint-disable-next-line max-len
  return [...otherClass, ...compClass.map(item => (item === '' ? '' : `${compName}-${item}`))].filter(x => x !== '').join(' ');
}

export function spellError(prop: string): void {
  console.error(`输入的 ${prop} 有误, 可能会影响到正常样式, 请检查拼写是否正确.`);
}

export function typeError(prop: string): void {
  console.error(`输入的 ${prop} 类型有误, 可能会影响到正常样式, 请检查类型是否正确.`);
}

export function getType(obj?: any) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

export interface BasicProps {
  children?: React.ReactNode,
  style?: React.CSSProperties,
  compRef?: any,
  className?: string,
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  onLoad?: (e?: React.SyntheticEvent<HTMLDivElement>) => void;
}

export interface IconProps {
  style?: React.CSSProperties;
  className?: string;
}
