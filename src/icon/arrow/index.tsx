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
    right: 270,
    left: 90,
    top: 180,
    bottom: 0
  };
  if (pointList[point] === undefined) spellError('point');

  return (
    <svg
      viewBox="0 0 1024 1024"
      className={`${ArrowStyle} ${className}`}
      style={{ ...style, transform: `rotate(${pointList[point]}deg)` }}
      {...rest}
    >
      <path d="M512 714.666667c-8.533333 0-17.066667-2.133333-23.466667-8.533334l-341.333333-341.333333c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l320 317.866667 317.866667-320c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L533.333333 704c-4.266667 8.533333-12.8 10.666667-21.333333 10.666667z" p-id="2982" />
    </svg>
  );
}

Arrow.defaultProps = {
  point: 'right'
};
