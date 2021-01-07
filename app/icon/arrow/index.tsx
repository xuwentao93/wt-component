/* eslint-disable max-len */
import * as React from 'react';
import './index.less';
import { IconProps, spellError, createIconRootClassName } from '@/utils/index.ts';

const ArrowStyle = createIconRootClassName('Arrow');

interface ArrowProps extends IconProps {
  point?: string
}

export default function Arrow({
  point = 'right',
  style = {},
  className = '',
  ...rest
}: ArrowProps) {
  const pointList: any = {
    right: 0,
    left: 180,
    top: 270,
    bottom: 90
  };
  if (pointList[point] === undefined) {
    spellError('point');
  }

  return (
    <svg
      viewBox="0 0 1024 1024"
      className={`${ArrowStyle} ${className}`}
      style={{ ...style, transform: `rotate(${pointList[point]}deg)` }}
      {...rest}
    >
      <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
    </svg>
  );
}

Arrow.defaultProps = {
  point: 'right'
};
